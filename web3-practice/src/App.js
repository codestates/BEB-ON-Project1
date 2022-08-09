import React, { useState } from 'react';
import Mypage from './Components/Mypage';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { NFTitems } from './Components/NFTList';

function App() {
  const [items, setItems] = useState(NFTitems.items);
  return (
    <BrowserRouter>
        <div>
          <Mypage items={items}/>
        </div>
    </BrowserRouter>
  );
}

export default App;