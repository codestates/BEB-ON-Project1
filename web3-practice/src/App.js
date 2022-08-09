import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav';


function App() {
    const [mainweb3, setMainweb3] = useState('');
	const [mainAccount, setMainAccount] = useState('Address not yet');
    const [isLogin, setIsLogin] = useState(false);    

    useEffect(() => {
        setMainAccount(mainAccount);
    }, [mainAccount]);

    useEffect(() => {
        if(mainAccount === 'Address not yet' || mainAccount === undefined || mainAccount === null) {
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
        
       </BrowserRouter>
    );

}

export default App;