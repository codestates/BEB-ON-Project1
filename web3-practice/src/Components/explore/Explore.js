import React from 'react';
import Erc721 from './Erc721';
import {useState, useEffect} from 'react';
import {getDatabase, ref, child, get} from "firebase/database";

import styled from "styled-components";
//import {Dimmer, Divider, Loader, Segment} from "semantic-ui-react";
//import {Link} from "react-router-dom";

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

function Explore() {
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

    function handleClick(e) {
        console.log(e.target);
    }

    return (
        <ViewItems>
            <ItemCount>
                {tokenList.length} 
                &nbsp;items</ItemCount>
            <ItemContainer>
                {
                    tokenList && tokenList
                        .sort((a, b) => {
                            return (b.price - a.price);
                        })
                        .map((token) => {
                            return (
                              <Erc721 
                                tokenId={token.tokenId} 
                                tokenURL={token.tokenURL} 
                                tokenName={token.tokenName} 
                                key={token.tokenId} 
                                tokenOwner={token.tokenOwner} 
                                price={token.price}
                                link={`/mypage/${token.tokenId}`}
                                isLoading = {isLoading}
                                onClick={handleClick} />
                            );
                        })
                }
            </ItemContainer>
        </ViewItems>
    );
}

export default Explore;