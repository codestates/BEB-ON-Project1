import React from 'react';
import {useState, useEffect} from 'react';
import {getDatabase, ref, child, get} from "firebase/database";
import {Link} from "react-router-dom";
import "./Activity.css";
import EtherLogo from "../images/Ethereum_logo.png";

function Activity() {
    const [isLoading, isSetLoading] = useState(true);
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const tokenId = '';

        const dbRef = ref(getDatabase());
        // history 구매내역 데이터 전체를 가져온다.
        get(child(dbRef, `Test/History/${tokenId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {

                    const jsonData = snapshot.val();

                    let reversed = [];
                    // 최신 내역 순서대로 보여주기 위해 들어간 순서 반대로 베열에 다시 삽입
                    jsonToArray(jsonData).forEach(child => {
                        reversed.unshift(child);
                    });

                    setHistory(reversed);
                    isSetLoading(false);

                    console.log(history);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //json 다중 객체를 배열로 변환
    function jsonToArray(json){
        var result = [];
        var keys = Object.keys(json);
        keys.forEach(function(key){
            result.push(json[key]);
        });
        return result;
    }

    return (
        <div className="board_wrap">
            <div className="board_title">
                <h2>Activity</h2>
                <p></p>
            </div>
            <div>
                <div className="board_list_wrap">
                    <div className="board_list">
                        <div className="top">
                            <div className="items">Item</div>
                            <div className="price">Price</div>
                            <div className="quantity">Quantity</div>
                            <div className="address">From</div>
                            <div className="address">To</div>
                            <div className="date">Date</div>
                     </div>
                        {
                            history.map((token) => (

                                <div >
                                    <div className="items">
                                        {/* "/nftdetail/:tokenId" */}
                                        <Link to={`/nftdetail/${token.tokenId}`}>
                                            <span>
                                                <img
                                                    src={`${token.tokenURI}`}
                                                    width="70"
                                                    height="70"
                                                    alt={`${token.tokenURI}`}/>
                                            </span>{token.tokenName}
                                        </Link>
                                    </div>
                                    <div className="price">
                                        <span>
                                            <img src={EtherLogo} 
                                            width="15" 
                                            height="15" 
                                            alt={EtherLogo}/>
                                        </span>
                                        &nbsp; {token.price}</div>
                                    <div className="quantity">{1}</div>
                                    <div className="address">{token.seller}</div>
                                    <div className="address">{token.buyer}</div>
                                    <div className="date">{token.transferTime}</div>

                                </div>
                            ))
                        }
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default Activity;