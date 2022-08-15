import { getDatabase, ref, child, update, set, onValue, get} from "firebase/database";
import { marketplaceAbi, marketplaceAddress, tokenAddress} from "../constants";

function BuyNFT({ web3, account, tokenId }) {
    const marketAddr = marketplaceAddress[0];
    const tokenAddr = tokenAddress[0];

    const db = getDatabase();     //firebase realtime db
    let historyIdx = 0;         // buyItem이 발생시 +1 증가해 History list를 indexing할 값

    const editTokenList = (tokenId, price, sellBool) => {
        const Ref = ref(db, `Dummy/Tokenlist/${tokenId}`);
        update(Ref,{
            ["price"] : Number(price),
            ["sellBool"] : sellBool,
            ["tokenOwner"] : account
        });
    }

    // 시연용으로 "Test/History/" 생성! PR떄는 다시 돌려놔야함
    const writeHistory = (seller, buyer, price, tokenId, tokenAddr) => {
        let today = new Date();   
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월
        let date = today.getDate();  // 날짜
        let hours = today.getHours(); // 시
        let minutes = today.getMinutes();  // 분
        let seconds = today.getSeconds();  // 초
        let time = year + '/' + month + '/' + date + "_" + hours + ':' + minutes + ':' + seconds;

        // 현재 history list로 접근하여 마지막으로 기록된 idx가 몇인지 가져옴.
        const HRef = ref(db, 'Dummy/History');
        onValue(HRef, (snapshot) => {
            if (snapshot.exists()) {
                historyIdx = snapshot.val().length;
                console.log(historyIdx);
            } else {
                console.log("No data available");
            }
        });

        let tokenName = ""; let tokenURI = ""
        const TRef = ref(db, `Dummy/Tokenlist/${tokenId}`);
        onValue(TRef, (snapshot) => {
            if (snapshot.exists()) {
                tokenName = snapshot.val()["tokenName"];
                tokenURI = snapshot.val()["tokenURI"];
            } else {
                console.log("No data available");
            }
        });

        set(ref(db, "Dummy/History/" + `${historyIdx}`), {
            seller: seller,
            buyer: buyer,
            price: price,
            tokenId: tokenId,
            nftAddress: tokenAddr,
            tokenName: tokenName,
            transferTime: time,
            tokenURI: tokenURI
        })
    };

    // 가격과 seller는 db에서 가져오지 않고 마켓플레이스 컨트랙트의 getListingInfo에서 가져옴
    const buyItem = async (tokenAddr, tokenId) => {
        try {
            const marketContract = new web3.eth.Contract(marketplaceAbi, marketAddr,{ from: account, to:marketAddr,  gasLimit: 3000000});
            const getListingInfo = await marketContract.methods.getListing(tokenAddr, tokenId).call();
            const price = Number(getListingInfo[0]);
            const seller = getListingInfo[1];
            const buyItem = await marketContract.methods.buyItem(tokenAddr, tokenId).send({value : price});
            const event = buyItem["events"]["ItemBought"]["returnValues"];
            console.log(event);
            window.alert(`구매 완료`);
            // editTokenList로 price를 0으로 돌리고, sellBool 상태도 바꿈
            editTokenList(tokenId, 0, false); //firebase의 tokenlist 수정
            // History list 작성
            writeHistory(seller, account, price, tokenId, tokenAddr);
            console.log("작성완료")
        } catch(e) {
            console.log(e);
        return e;
        }
    };

    // Event listener
    const handleClick = () => {
        buyItem(tokenAddr, tokenId);
    }

    return (
        <div>
            <button onClick={handleClick}>
                구매
            </button>
        </div>
    );
}

export default BuyNFT;
