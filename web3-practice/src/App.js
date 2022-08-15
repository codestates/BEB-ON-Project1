import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Mypage from './Pages/Mypage';
import NFTdetail from './Pages/NFTdetail';
import Explore from './Pages/explore/Explore';
import Activity from './Pages/Activity';
import MintNft from "./Pages/MintNft";
import SellRegistration from './Components/SellRegistration';
import BuyNFT from './Components/BuyNFT';
import ProceedManage from './Components/ProceedManage';

import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mainweb3, setMainweb3] = useState("");
  const [mainAccount, setMainAccount] = useState("Address not yet");
  const [isLogin, setIsLogin] = useState(false);
  const [tokenId, setTokenId] = useState();

  useEffect(() => {
    setMainAccount(mainAccount);
  }, [mainAccount]);

  useEffect(() => {
    if (
      mainAccount === "Address not yet" ||
      mainAccount === undefined ||
      mainAccount === null
    ) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [mainAccount]);

  return (
       <BrowserRouter>
        <Nav
            setmainaccount={setMainAccount}
            setmainweb3={setMainweb3}
            setislogin={setIsLogin}
            login={isLogin}
        />
        <Routes>
            <Route exact={true} path="/" 
                element={<Home 
                setmainaccount={setMainAccount}
                setmainweb3={setMainweb3} />} />
            <Route path="/explore" 
                element={<Explore 
                web3={mainweb3}
                account={mainAccount} />} />
            <Route path="/activity" element={<Activity />} />

            <Route path="/create" element={<MintNft  />} /> 

            <Route path="/mypage" 
                element={<Mypage account={mainAccount} />} /> 
             <Route path="/nftdetail/:tokenId" element={<NFTdetail account={mainAccount} />} />
        </Routes>
        <div></div>
       </BrowserRouter>
    );
}

export default App;
