import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import MintNft from "./Components/MintNft";

function App() {
  const [mainweb3, setMainweb3] = useState("");
  const [mainAccount, setMainAccount] = useState("Address not yet");
  const [isLogin, setIsLogin] = useState(false);

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
        <Route path="/create" element={<MintNft />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
