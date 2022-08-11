import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3";
import "./Nav.css";

import { MdSearch, MdAccountCircle } from "react-icons/md";
import MintNft from "./MintNft";

function Nav({ setmainaccount, setmainweb3, setislogin, login }) {
  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
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
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  /* const logOut = async () => {
    setWeb3('');
    setAccount('');
    setislogin(false);
  }; */

  return (
    <div>
      <div className="menu-large">
        <div>
          <span>
            <h2>
              <Link to="/" className="title">
                <img
                  src="https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(dark).png"
                  height="38"
                />
              </Link>
            </h2>
          </span>
        </div>
        <div className="search-container">
          <div className="icon">
            <MdSearch className="search-icon" />
          </div>
          <input
            className="search-input"
            placeholder="Search items, collections, and accounts"
          />
        </div>

        <div>
          <ul className="menu-item-container">
            <li>
              <Link to="/explore" className="menu-item">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/activity" className="menu-item">
                Activity
              </Link>
            </li>
            <li>
              <Link to="/create" className="menu-item">
                <div
                  onClick={() => {
                    connectWallet();
                  }}
                >
                  Create
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/mypage"
                className={login ? "menu-item login" : "menu-item"}
              >
                <MdAccountCircle
                  className="menu-icon"
                  onClick={() => {
                    connectWallet();
                  }}
                />
              </Link>
            </li>
            <li></li>
            {/* <li>
              <Link to="/" className="menu-item">            
                <div
                  
                  onClick={() => {
                    logOut();
                  }}>Logout
                </div>
              </Link>             
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
