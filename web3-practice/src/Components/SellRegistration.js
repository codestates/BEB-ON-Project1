import React, { useState, useEffect } from "react";
import marketAbi from "../ABI/marketAbi"; // 임시로 저장해논 marketABI 가져옴, 추후 Hardhat으로 부터 가져올 예정!
import {
  getDatabase,
  ref,
  child,
  update,
  set,
  onValue,
} from "firebase/database";

function SellRegistration({ web3, account, nftAddr, tokenId }) {
  // 임시로 이미 배포된 MarketPlace Contract 사용, 나중에 Hardhat으로 가져올 예정!
  const contractAddr = "0xc612Cd63Deb0db188F7d38dB0728CC845B346AbC";
  const db = getDatabase(); //firebase realtime db

  const [price, setPrice] = useState(null);

  const editTokenList = (tokenId, price, sellBool) => {
    const Ref = ref(db, `Dummy/Tokenlist/${tokenId}`);
    update(Ref, {
      ["price"]: Number(price),
      ["sellBool"]: sellBool,
    });
  };

  const sellRegister = async (nftAddr, tokenId) => {
    try {
      // price가 정수 인지 확인
      if (price % 1 == 0 && price !== null) {
        const marketContract = new web3.eth.Contract(marketAbi, contractAddr, {
          from: account,
          to: contractAddr,
          gasLimit: 3000000,
        });
        console.log(marketContract);
        const listItem = await marketContract.methods
          .listItem(nftAddr, tokenId, price)
          .send();
        console.log(listItem);
        window.alert(
          `${nftAddr.slice(0, 6)}...가 ${price}wei로 판매 등록 완료 되었습니다.`
        );
        editTokenList = (tokenId, price, true); //firebase의 tokenlist 수정
      } else {
        return window.alert("판매가를 확인하세요.");
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const cancleRegister = async (nftAddr, tokenId) => {
    try {
      const marketContract = new web3.eth.Contract(marketAbi, contractAddr, {
        from: account,
        to: contractAddr,
        gasLimit: 3000000,
      });
      console.log(marketContract);
      const cancelListing = await marketContract.methods
        .cancelListing(nftAddr, tokenId)
        .send();
      console.log(cancelListing);
      window.alert("판매 등록 취소 되었습니다.");
      editTokenList = (tokenId, 0, false); //firebase의 tokenlist 수정
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const getRegister = async (nftAddr, tokenId) => {
    try {
      const marketContract = new web3.eth.Contract(marketAbi, contractAddr, {
        from: account,
        to: contractAddr,
        gasLimit: 3000000,
      });
      console.log(marketContract);
      const getListingInfo = await marketContract.methods
        .getListingInfo(nftAddr, tokenId)
        .call();
      console.log(getListingInfo);
      window.alert(`가격, 판매자 계정 \n ${getListingInfo}`);
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  // Event listener
  const handleChange = (e) => {
    setPrice(e.target.value.toUpperCase());
  };

  const handleClick = () => {
    sellRegister(nftAddr, tokenId);
  };

  const handleClick2 = () => {
    cancleRegister(nftAddr, tokenId);
  };

  const handleClick3 = () => {
    getRegister(nftAddr, tokenId);
  };

  return (
    <div>
      <div> 판매 등록 </div>
      <span> 판매가 </span>
      <input
        type="text"
        value={price}
        onChange={handleChange}
        placeholder="정수 입력 (Wei 단위)"
      ></input>
      <button onClick={handleClick}>등록</button>
      <button onClick={handleClick2}>등록 취소</button>
      <button onClick={handleClick3}>등록 확인</button>
    </div>
  );
}

export default SellRegistration;
