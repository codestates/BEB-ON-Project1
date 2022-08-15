import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, update, set, onValue } from "firebase/database";
import { tokenAbi, tokenAddress, marketplaceAbi, marketplaceAddress} from "../constants";

function SellRegistration({ web3, account, tokenId }) {
  const tokenAddr = tokenAddress[0];
  const marketAddr = marketplaceAddress[0];

  const db = getDatabase(); //firebase realtime db

  const [price, setPrice] = useState(null);

  const editTokenList = (tokenId, price, sellBool) => {
    const Ref = ref(db, `Test/Tokenlist/${tokenId}`);
    update(Ref, {
      ["price"]: Number(price),
      ["sellBool"]: sellBool,
    });
  };

  const sellRegister = async (tokenAddr, tokenId) => {
    try {
      // price가 정수 인지 확인
      if (price % 1 == 0 && price !== null) {
        const nftContract = new web3.eth.Contract(tokenAbi, tokenAddr, {from: account, to: tokenAddr, gasLimit: 3000000});
        const approve = await nftContract.methods.approve(marketAddr, tokenId).send();
        console.log(approve)
        const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr, gasLimit: 3000000});
        console.log(marketContract);
        const listItem = await marketContract.methods.listItem(tokenAddr, tokenId, price).send();
        console.log(listItem);
        window.alert(`${tokenAddr.slice(0, 6)}...가 ${price}wei로 판매 등록 완료 되었습니다.`);
        editTokenList(tokenId, price, true); //firebase의 tokenlist 수정
      } else {
        return window.alert("판매가를 확인하세요.");
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const cancleRegister = async (tokenAddr, tokenId) => {
    try {
      const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr,  gasLimit: 3000000});
      console.log(marketContract);
      const cancelListing = await marketContract.methods.cancelListing(tokenAddr, tokenId).send();
      console.log(cancelListing);
      window.alert("판매 등록 취소 되었습니다.");
      editTokenList(tokenId, 0, false); //firebase의 tokenlist 수정
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const getRegister = async (tokenAddr, tokenId) => {
    try {
      console.log(account);
      const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr,  gasLimit: 3000000});
      console.log(marketContract);
      const getListingInfo = await marketContract.methods.getListing(tokenAddr, tokenId).call();
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
    sellRegister(tokenAddr, tokenId);
  };

  const handleClick2 = () => {
    cancleRegister(tokenAddr, tokenId);
  };

  const handleClick3 = () => {
    getRegister(tokenAddr, tokenId);
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
