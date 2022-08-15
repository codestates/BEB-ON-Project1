import { useState } from "react";
import { tokenAbi, tokenAddress } from "../constants";
import { NFTStorage, File } from "nft.storage/dist/bundle.esm.min.js";
import { getDatabase, ref, set } from "firebase/database";
import Web3 from "web3";

export default function MintNft({ account, web3 }) {
  // const web3 = new Web3(window.ethereum);
  // const account = "0x39a475635b9D73e7dD8336B035781d0C51Ec367a";
  const tokenAddr = tokenAddress[0];
  const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_TOKEN;
  let tokenUri;
  let ImgURL = "";

  // const [tokenId, setTokenId] = useState();
  //const [tokenUri, setTokenUri] = useState("");
  const [tokenName, setTokenName] = useState();
  const [file, setFile] = useState();

  const changeTokenName = (e) => {
    setTokenName(e.target.value);
    // console.log(tokenName);
  };

  const retrieveFile = async (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };
  };

  const setMetadata = async () => {
    try {
      const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
      const metadata = await client.store({
        name: tokenName,
        description: "",
        image: new File(
          [file],
          tokenName,
          { type: "image/png" } || { type: "image/jpeg" } || {
              type: "image/gif",
            }
        ),
      });
      console.log(metadata.url);
      tokenUri = metadata.url.slice(7);
      // 사진이 바로 보이게 하기 위해 추가
      ImgURL = await getImgURL();
      ImgURL = "https://ipfs.io/ipfs" + ImgURL;
    } catch (err) {
      console.error(err);
    }
  };

  // 사진이 바로 보이게 하기 위해 추가
  const getImgURL = () => {
    return new Promise(function (receive) {
      fetch("https://ipfs.io/ipfs/" + tokenUri)
        .then((response) => response.json())
        .then((data) => receive(data["image"].slice(6)));
    });
  };

  const dbUpload = (ti) => {
    try {
      const db = getDatabase();
      set(ref(db, `Test/Tokenlist/${ti}`), {
        tokenId: ti,
        tokenURI: ImgURL,
        tokenOwner: account,
        tokenName: tokenName,
        nftAddress: tokenAddr,
        price: 0,
        sellBool: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getToken = async () => {
    try {
      const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddr, {
        from: account,
        to: tokenAddr,
        gasLimit: 3000000,
      });
      tokenContract.once("NftMinted", async function (err, evt) {
        const tokenId = await evt.returnValues.tokenId;
        console.log(`Token minted! Token ID is ${tokenId}`);

        console.log("Updating DB");
        dbUpload(tokenId);
        console.log("DB Done! All Done!");
      });
      await tokenContract.methods.mintNft(tokenUri).send();
    } catch (err) {
      console.error(err);
    }
  };

  const mintToken = async () => {
    console.log("Uploading Metadata to IPFS");
    await setMetadata();
    console.log("IPFS Done!");
    console.log("Minting Token");
    await getToken();
  };

  return (
    <div>
      <label>
        Upload Image
        <input
          type="file"
          accept="image/png, image/jpeg, image/gif"
          onChange={retrieveFile}
        />
      </label>
      <label>
        Token Name
        <input type="text" onChange={changeTokenName} />
      </label>
      <button onClick={mintToken}>Mint</button>
    </div>
  );
}
