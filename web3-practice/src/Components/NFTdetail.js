import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
//import SellRegistration from './SellRegistration';
import { getDatabase, ref, child, get } from "firebase/database";
//import './NFTdetail.css';

const NFTdetail = ({tokenId}) => {
    console.log({tokenId});
    const [isLoading, isSetLoading] = useState(true);
    const [tokenList, setTokenList] = useState([]);

    useEffect(() => {
        const tokenId = '';

        const dbRef = ref(getDatabase());
        get(child(dbRef, `Dummy/Tokenlist/${tokenId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const jsonData = JSON.parse(JSON.stringify(snapshot.val()));
                    setTokenList(jsonData);
                    console.log(jsonData);
                    isSetLoading(false);
                } else {
                  console.log("No data available");
                }
             })
            .catch((error) => {
                console.error(error);
            });
    }, [])
    console.log(tokenList);

    const findToken = tokenList.find( (e) => {
        return e.tokenId === tokenId;
    })
    console.log(findToken);

    return (
        <div id="nft-container">
            <div id="nftbody">
                <div id="nft-title">
                    NFTDetail 
                </div>
                <div id="nft-item" >
                    <span>
                        <img></img>
                    </span>
                    <span className="nft-info">
                        <span className="item-name"></span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default NFTdetail;