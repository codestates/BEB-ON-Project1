import React, {useState, useEffect} from 'react';
import Mycollection from './Mycollection';
import { Link } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import styled from "styled-components";
import './Mypage.css';
//import { NFTitems } from './NFTList';

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

const Mypage = () => {
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
    alert(e.tokenId);
  } 
  return (
    <div id="mypage-nav">
        <span id="mypagetitle">
          <img id="mypagelogo" src="../mypagelogo.png" />
          <span id="mypagename">Mypage</span>
        </span>
        <div id="mypagemenu">
          <Link to="/">
              MyCollection<span id="mypage-mycollection-counter"></span>
          </Link>
          <Link to="/created">
              Created<span id="mypage-creatednft-counter"></span>
          </Link>
        </div>
        <MypageContainer>
            <MypageBody>
              <MypageTitle>
                MyCollectionList
              </MypageTitle>
                  <span>
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
                                link={`/nftdetail`}
                                isLoading = {isLoading}
                                onClick={handleClick} />
                            );
                        })
                     }
                  </span>
              </MypageBody>
        </MypageContainer>
        
    </div>
  )
  
    /*return (
      <div id="mypage-nav">
          <span id="mypagetitle">
            <img id="mypagelogo" src="../mypagelogo.png" />
            <span id="mypagename">Mypage</span>
          </span>
          <div id="mypagemenu">
            <Link to="/">
                MyCollection<span id="mypage-mycollection-counter">{NFTitems.length}</span>
            </Link>
            <Link to="/created">
                Created<span id="mypage-creatednft-counter">{NFTitems.length}</span>
            </Link>
          </div>
        <div id="mypage-container">
          <div id="mypage-body">
              <div id="mypage-title">
                  MyCollectionList
              </div>
            {NFTitems.map((item) => {
              return (
                <span id="mypage-item" >
                  <div className="item">
                    <img className="item-image" src={item.image} alt=""></img>
                    <span className="item-name">{item.name}</span>
                    <Link to="/nftdetail">
                      <button className="item-button" >Detail</button>
                    </Link>
                  </div>
                </span>
              )
            })}
          </div>
        </div>
      </div>
    )*/
}

export default Mypage;