import React, {useState, useEffect} from "react";
//import SellRegistration from './SellRegistration';
import { getDatabase, ref, child, get } from "firebase/database";
import './NFTdetail.css';
import { async } from "@firebase/util";

const NFTdetail = () => {
    const [isLoading, isSetLoading] = useState(true);
    const [tokenList, setTokenList] = useState([]);


    useEffect( ()=> {
        const plzfast = () => {
            const tokenId = '';

            const dbRef =  ref(getDatabase());
            get(child(dbRef, `Dummy/Tokenlist/${tokenId}`))
                .then( (snapshot) => {
                    if (snapshot.exists()) {
                        const jsonData = snapshot.val();

                        let findToken = window.location.href.slice(32);
                        findToken = Number(findToken);

                        let filteredArray = [];
                        filteredArray = jsonToArray(jsonData)
                                   .filter(token => token.tokenId === findToken)

                        console.log(filteredArray[0])
                        setTokenList(filteredArray);
                        isSetLoading(false);
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
    }
        plzfast();
    }, []);
    /*
    const [isLoading, isSetLoading] = useState(true);
    const [tokenList, setTokenList] = useState([]);

    useEffect( () => {
            const tokenId = '';

            const dbRef = ref(getDatabase());
            get(child(dbRef, `Dummy/Tokenlist/${tokenId}`))
                .then( (snapshot) => {
                    if (snapshot.exists()) {
                        const jsonData = snapshot.val();

                        let findToken = window.location.href.slice(32);
                        findToken = Number(findToken);

                        let filteredArray = [];
                        filteredArray = jsonToArray(jsonData)
                                   .filter(token => token.tokenId === findToken)

                        console.log(filteredArray[0])
                        setTokenList(filteredArray);
                        isSetLoading(false);
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });      
    }, []);*/
    function jsonToArray(json) {
        var result = [];
        var keys = Object.keys(json);
        keys.forEach( function(key) {
            result.push(json[key]);
        });
        return result;
    }
    
    console.log(tokenList[0]); // 여기까지 받아와지는거 확인

    return (
        <div id="nft-container">
            <div id="nftbody">
                <div id="nft-title">
                    NFTDetail 
                </div>
                <div id="nft-item" >
                    <span>
                        <img className="item-image" ></img>
                    </span>
                    <span className="nft-info">
                        <span className="item-name">{/*tokenList[0].tokenName*/}</span>
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default NFTdetail;