import React, {useState, useEffect} from 'react';
import Mycollection from './Mycollection';
import { Routes, Route } from "react-router-dom";
import ProceedManage from '../Components/ProceedManage';
import { getDatabase, ref, child, get } from "firebase/database";
import styled from "styled-components";
import './Mypage.css';

const MypageContainer = styled.div `
  display: table;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 4rem);
`;

const MypageTitle = styled.div `
  font-size: 1.5rem;
  font-weight: 800;
  padding-bottom: 1rem;
  margin: 0.5rem;
`

const MypageBody = styled.div `
  background-color: #bc9eff0e;
  padding: 5rem;
  display: table-cell;
  width: 100%;
`
const MypageItem = styled.div `
  display: inline-block;
  width: 230px;
  height: 300px;
  border: solid rgb(238, 238, 238) 0.1rem;
  margin: 0.3rem;
  background-color: white;
`

const Mypage = ({account}) => {
  const [isLoading, isSetLoading] = useState(true);
  const [tokenList, setTokenList] = useState([]);

  if (account == "Address not yet" || null || undefined) {window.alert("로그인 하세요.")}

  useEffect(() => {
      const tokenId = '';

      const dbRef = ref(getDatabase());
      get(child(dbRef, `Dummy/Tokenlist/${tokenId}`))
          .then((snapshot) => {
              if (snapshot.exists()) {

                  let jsonData = JSON.parse(JSON.stringify(snapshot.val()));
                  // CSS 테스트로 인해 잠시 주석처리
                  /*jsonData = jsonData.filter((obj) => {
                    if (obj.tokenOwner.toUpperCase() == account.toUpperCase()) return true
                  });*/
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
  console.log(tokenList);

  function handleClick(e) {
      console.log(e.target);
  } 
  return (
    <div id="mypage-nav">
        <div id="mypagetitle">
          <img id="mypagelogo" src="../mypagelogo.png" />
          <span id="mypagename">Mypage</span>
          <span><ProceedManage /></span>
        </div>
            <MypageBody>
             <MypageContainer>
                <MypageTitle>
                  MyCollectionList
                </MypageTitle>
                    {tokenList && tokenList
                        .sort((a, b) => {
                            return (b.price - a.price);
                        })
                        .map((token) => {
                            return (
                              <Mycollection
                                tokenId={token.tokenId} 
                                tokenURL={token.tokenURL} 
                                tokenName={token.tokenName} 
                                key={token.tokenId} 
                                price={token.price}
                                tokenOwner={token.tokenOwner} 
                                link={`/nftdetail/${token.tokenId}`}
                                isLoading = {isLoading}
                                onClick={handleClick} />
                            );
                        })
                    }
               </MypageContainer>
              </MypageBody>
        
    </div>
  )
}

export default Mypage;