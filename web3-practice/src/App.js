import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Explore from './Components/explore/Explore';
import Mypage from './Components/Mypage';
import NFTdetail from './Components/NFTdetail';

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
            <Route path="/explore" element={<Explore  />} />
            <Route path="/mypage" element={<Mypage 
            setmainaccount={setMainAccount}
            setmainweb3={setMainweb3}
            setTokenId={setTokenId}
            tokenId={tokenId} />} />
            <Route path="/NFTdetail/:tokenId" element={<NFTdetail 
            setTokenId={setTokenId}
            tokenId={tokenId} />} />
        </Routes>
        <div></div>
       </BrowserRouter>
    );
}

export default App;

/*import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Mypage from './Components/Mypage';
import NFTdetail from './Components/NFTdetail';
//import { NFTitems } from './Components/NFTList';
//import Nav from './Components/Nav';


function App() {

    
    return (
        <BrowserRouter>
         <Routes>
             <Route path="/" element={<Mypage />} />
             <Route path="/nftdetail" element={<NFTdetail />} />
         </Routes>
        </BrowserRouter>
    );
}

export default App;*/