import React, {useState, useEffect} from "react";
import SellRegistration from '../Components/SellRegistration';
import BuyNFT from "../Components/BuyNFT";
import { getDatabase, ref, child, get, onValue} from "firebase/database";
import './NFTdetail.css';

const NFTdetail = ({account}) => {
    const [tokenObj, setTokenObj] = useState({tokenURL : "", tokenName : "", tokenOwner : ""});

    const tokenId =  window.location.href.slice(32);

    useEffect( ()=> {
        const db = getDatabase();
        const TRef = ref(db, 'Dummy/Tokenlist/'+tokenId);
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
            return <SellRegistration />
        }
        else {return <BuyNFT />}
    }

    return (
        <div id="nft-container">
            <div id="nftbody">
                <div id="nft-title">
                    NFTDetail 
                </div>
                <div id="nft-item" >
                    <span>
                        <img className="item-image" src={tokenObj.tokenURL} />
                    </span>
                    <span className="nft-info">
                        <span className="item-name">{tokenObj.tokenName}</span>
                        <div>Owned by {tokenObj.tokenOwner.length !=0 ? tokenObj.tokenOwner.slice(0,6) : ""}... </div>
                        <div>Current price : {tokenObj.price} wei</div>
                        {isMine(tokenObj.tokenOwner)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NFTdetail;