import React from 'react';
import Erc721 from './Erc721';
import {useState, useEffect} from 'react';
import {getDatabase, ref, child, get} from "firebase/database";

import styled from "styled-components";
// import {Dimmer, Divider, Loader, Segment} from "semantic-ui-react"; import
// {Link} from "react-router-dom";

const ViewItems = styled.div `
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
  z-index: 50;
`;

const ItemContainer = styled.ul `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
`;

const ItemCount = styled.div `
  margin-left: 45px;
  font-size: 19px;
  color: black;
  font-weight: bold;
`;


function Explore({ web3, account }) {

    const [isLoading, isSetLoading] = useState(true);
    const [tokenList, setTokenList] = useState([]);

    useEffect(() => {
        const tokenId = '';

        const dbRef = ref(getDatabase());
        get(child(dbRef, `Test/Tokenlist/${tokenId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {

                    const jsonData = snapshot.val();
  
                    let fiteredArray = [];

                    fiteredArray = jsonToArray(jsonData)
                                   .filter(token => token.sellBool === true)

                    setTokenList(fiteredArray);
                    // console.log(tokenList);
                    isSetLoading(false);

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
        <ViewItems>
          <div className="board_title">
              <h2>Explore</h2>
          </div>

            <ItemCount>
                {tokenList.length}
                &nbsp;items</ItemCount>
            <ItemContainer>
                {
                    tokenList && tokenList                                  
                        .map((token) => {
                            return (
                                <Erc721
                                    web3 = {web3}
                                    account = {account}
                                    tokenId={token.tokenId}
                                    tokenUri={token.tokenURI}
                                    tokenName={token.tokenName}                                  
                                    tokenOwner={token.tokenOwner}
                                    price={token.price}
                                    link={`/nftdetail/${token.tokenId}`}
                                    isLoading={isLoading}
                                    key={token.tokenId}
                                     />
                            );
                        })                     
                }
            </ItemContainer>
        </ViewItems>
    );
}

export default Explore;