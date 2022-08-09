import React from 'react';
import { Link } from "react-router-dom";
import Item from './Item';
import './Mypage.css';

function Mypage({items}) {
    return (
        <div id="mypage-nav">
          <span id="mypagetitle">
            <img id="mypagelogo" src="../mypagelogo.png" />
            <span id="mypagename">Mypage</span>
          </span>
          <div id="mypagemenu">
            <Link to="/">
                Collected<span id="mypage-collectednft-counter">{items.length}</span>
            </Link>
            <Link to="/nftlist">
                Created<span id="mypage-creatednft-counter">{items.length}</span>
            </Link>
          </div>
          <div id="mypage-container">
            <div id="mypage-body">
                <div id="mypage-title">
                    CollectedNFTList
                </div>
                <div id="mypage-item">
                  <Link to="/nftdetail">
                    {items.map((item, idx) => <Item item={item} key={idx} />)}
                  </Link>
                </div>
            </div>
          </div>
        </div>
        
    );
}

export default Mypage;