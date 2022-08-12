import React, {useState, useEffect} from "react";
//import SellRegistration from './SellRegistration';
import { NFTitems } from './NFTList';
import { getDatabase, ref, child, get } from "firebase/database";
//import './NFTdetail.css';

const NFTdetail = () => {
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
                    isSetLoading(false);
                } else {
                  console.log("No data available");
                }
             })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const filteredNFTitems = tokenList.orderByChild("Dummy/Tokenlist/tokenId").equalTo('0').once('value', function(data) {
        console.log(data.const())
    })

    return (
        <div id="nft-container">
            <div id="nftbody">
                <div id="nft-title">
                    NFTDetail
                </div>
                <div id="nft-item" >
                    <span className="item">
                        <img className="item-image" src={filteredNFTitems[0].tokenURL} alt=""></img>
                    </span>
                    <span className="nft-info">
                        <span className="item-name">{}</span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default NFTdetail;