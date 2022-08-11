import React, { useState, useEffect } from 'react';
import marketAbi from '../ABI/marketAbi';       // 임시로 저장해논 marketABI 가져옴, 추후 Hardhat으로 부터 가져올 예정!

function ProceedManage({ web3, account}) {
    // 임시로 이미 배포된 MarketPlace Contract 사용, 나중에 Hardhat으로 가져올 예정!
    const contractAddr = "0xc612Cd63Deb0db188F7d38dB0728CC845B346AbC";
    const [myProceed, setMyProceed] = useState("");
    
    const getProceeds = async (account) => {
        try {
            const marketContract = new web3.eth.Contract(marketAbi, contractAddr,{ from: account, to:contractAddr,  gasLimit: 3000000});
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
            const marketContract = new web3.eth.Contract(marketAbi, contractAddr,{ from: account, to:contractAddr,  gasLimit: 3000000});
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
