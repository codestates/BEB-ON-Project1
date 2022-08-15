import React, {useState, useEffect} from "react";
import SellRegistration from '../Components/SellRegistration';
import BuyNFT from "../Components/BuyNFT";
import styled from "styled-components";
import { getDatabase, ref, child, get, onValue} from "firebase/database";
import './NFTdetail.css';

const NFTdetail = ({web3, account}) => {
    const [tokenObj, setTokenObj] = useState({tokenURL : "", tokenName : "", tokenOwner : ""});

    const tokenId =  window.location.href.slice(32);

    useEffect( ()=> {
        const db = getDatabase();
        const TRef = ref(db, 'Test/Tokenlist/'+tokenId);
        onValue(TRef, (snapshot) => {
            if (snapshot.exists()) {
                setTokenObj(snapshot.val());
            } else {
                console.log("No data available");
            }
        });
    }, []);


    // 내가 이 NFT 주인이면 판매등록 component가 보이고, 주인이 아니면 구매 component가 보임
    const isMine = (address) => {
        if (address.toUpperCase() == account.toUpperCase()){
            return <SellRegistration web3={web3} account={account} tokenId={tokenId} />
        }
        else {return <BuyNFT web3={web3} account={account} tokenId={tokenId} />}
    }

    return (
        <div>
            <div id="nft-title">
                NFTDetail 
            </div>
            <div id="nftlist">
                <img className="nft-image" src={tokenObj.tokenURI} />
                <span className="nft-name">
                    {tokenObj.tokenName}
                 </span>
                <div className="nft-info">
                    <div className="nft-owner">Owned by {tokenObj.tokenOwner.length !=0 ? tokenObj.tokenOwner.slice(0,6) : ""}... </div>
                    <div className="nft-price">
                        Current price :
                        <img className="price-logo" src="../Ethereum_logo.png" />
                        {tokenObj.price} wei
                    </div>
                    <div className="nft-button">{isMine(tokenObj.tokenOwner)}</div>
                </div>
            </div>
        </div>
    )
}

export default NFTdetail;