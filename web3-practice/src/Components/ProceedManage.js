import React, { useState, useEffect } from 'react';
import { marketplaceAbi, marketplaceAddress} from "../constants";

function ProceedManage({ web3, account}) {
    const marketAddr = marketplaceAddress[0];
    const [myProceed, setMyProceed] = useState("");
    
    const getProceeds = async (account) => {
        try {
            const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr,  gasLimit: 3000000});
            const getProceeds = await marketContract.methods.getProceeds(account).call();
            console.log(getProceeds);
            setMyProceed(getProceeds);
        } catch(e) {
            console.log(e);
        return e;
        }
    };

    const withdrawProceeds = async (account) => {
        try {
            const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr,  gasLimit: 3000000});
            const withdrawProceeds = await marketContract.methods.withdrawProceeds().send();
            console.log(withdrawProceeds);
            window.alert("인출이 완료 되었습니다.")
        } catch(e) {
            console.log(e);
        return e;
        }
    };

    // Event listener
    const handleClick = () => {
        getProceeds(account);
    }

    const handleClick2 = () => {
        withdrawProceeds(account);
    }

    return (
        <div>
            <div>
                <button onClick={handleClick}>
                    판매대금 확인
                </button>
                {myProceed}
            </div>
            <div>
                <button onClick={handleClick2}>
                    판매대금 인출
                </button>
            </div>
        </div>
    );
}

export default ProceedManage;
