import { useState } from "react";
import {
  tokenAbi,
  tokenAddress,
  marketplaceAbi,
  marketplaceAddress,
} from "../constants";
import Web3 from "web3";
import FileUpload from "./FileUpload";
import { MdAssignmentTurnedIn } from "react-icons/md";

export default function MintNft() {
  const [name, setName] = useState("");

  const web3 = new Web3(window.ethereum);
  const URI = "temp";
  const tokenAddr = tokenAddress[0];
  const marketplaceAddr = marketplaceAddress[0];
  const account = "0x39a475635b9D73e7dD8336B035781d0C51Ec367a";
  let tokenId;

  const mintToken = async () => {
    try {
      const tokenContract = new web3.eth.Contract(tokenAbi, tokenAddr, {
        from: account,
        to: tokenAddr,
        gasLimit: 3000000,
      });
      await tokenContract.methods.mintNft(URI).send();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <FileUpload />
      <label>
        Token Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          mintToken();
        }}
      >
        mint
      </button>
    </div>
  );
}
