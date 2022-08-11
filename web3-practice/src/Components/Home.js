import React from 'react';
import { useState, useEffect } from 'react';
import "./Home.css";
import { Link } from "react-router-dom";
import Web3 from 'web3';

function Home({ setmainaccount, setmainweb3 }) {

  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다

        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setmainaccount(account);
  }, [account]);

  useEffect(() => {
    setmainweb3(web3);
  }, [web3]);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    setAccount(accounts[0]);
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* 화면 전체에 흐리게 띄워지는 이미지 blur 처리 */}
        <div className="contentWrapper">
          <div className="copyContainer">
            <div className="title">
              Discover, collect, and sell <br /> 
              extraordinary NFTs
            </div>
            <div className="description">
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            {/* Opensea 홈페이지와 같은 문구 */}
            <div className="ctaContainer">
              <Link to="/explore">
                <div className="accentedButton">Explore</div>
              </Link>
              <Link to="/create">
                <div className="button" onClick={() => {
                    connectWallet();
                  }}>Create
                </div>
              </Link>

              {/* 버튼 CSS */}
            </div>
          </div>
          <div>
            <img
              className="cardContainer"
              src="https://ipfs.io/ipfs/QmQbc3bMgs1Zzx1MDx4S2sFZ925JJwiZpniWp9RLhaWxNe?filename=QmQbc3bMgs1Zzx1MDx4S2sFZ925JJwiZpniWp9RLhaWxNe"
              width="400"
              height="550"
              alt=""
              // 메인 페이지에 판매중인 이미지 띄우기
            />
            <div className="infoContainer">
              <img
                className="nftprofile"
                src="https://ipfs.io/ipfs/QmXfJ93WSaiPpkeFrPqTh3cJNuLQ22wn8PyBkpCDd35aKE?filename=QmXfJ93WSaiPpkeFrPqTh3cJNuLQ22wn8PyBkpCDd35aKE"
                width="30"
                height="30"
                alt=""
                // 누가 판매중인지 프로필 이미지 띄우기
              />
              <div className="author">
                <div className="name">Jang Yeong-Sil, #1484</div>
                <a
                  className="nftprofilelink"
                  href="https://opensea.io/assets/ethereum/0xff80bd43e3f0e414afc70cb8ac1d3f0e6a303a2f/1484"

                  // 실제 판매중인 opensea 홈페이지로 이동되는 링크
                >
                  SYLTARE, Dawn of East
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;