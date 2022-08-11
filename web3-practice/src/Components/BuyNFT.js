import marketAbi from '../ABI/marketAbi';       // 임시로 저장해논 marketABI 가져옴, 추후 Hardhat으로 부터 가져올 예정!
import { getDatabase, ref, child, update, set, onValue, get} from "firebase/database";

function BuyNFT({ web3, account, nftAddr, tokenId }) {
    // 임시로 이미 배포된 MarketPlace Contract 사용, 나중에 Hardhat으로 가져올 예정!
    const contractAddr = "0xc612Cd63Deb0db188F7d38dB0728CC845B346AbC";
    const db = getDatabase();     //firebase realtime db
    let historyIdx = 0;         // buyItem이 발생시 +1 증가해 History list를 indexing할 값

    const editTokenList = (tokenId, price, sellBool) => {
        const Ref = ref(db, `Dummy/Tokenlist/${tokenId}`);
        update(Ref,{
            ["price"] : Number(price),
            ["sellBool"] : sellBool
        });
    }

    // 시연용으로 "Test/History/" 생성! PR떄는 다시 돌려놔야함
    const writeHistory = (seller, buyer, price, tokenId, nftAddr) => {
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
        set(ref(db, "Test/History/" + `${historyIdx}`), {
            seller: seller,
            buyer: buyer,
            price: price,
            tokenId: tokenId,
            nftAddress: nftAddr
        })
    };

    // 가격과 seller는 db에서 가져오지 않고 마켓플레이스 컨트랙트의 getListingInfo에서 가져옴
    const buyItem = async (nftAddr, tokenId) => {
        try {
            const marketContract = new web3.eth.Contract(marketAbi, contractAddr,{ from: account, to:contractAddr,  gasLimit: 3000000});
            const getListingInfo = await marketContract.methods.getListingInfo(nftAddr, tokenId).call();
            const price = Number(getListingInfo[0]);
            const seller = getListingInfo[1];
            const buyItem = await marketContract.methods.buyItem(nftAddr, tokenId).send({value : price});
            const event = buyItem["events"]["ItemBought"]["returnValues"];
            console.log(event);
            window.alert(`구매 완료`);
            // editTokenList로 price를 0으로 돌리고, sellBool 상태도 바꿈
            editTokenList(tokenId, 0, false); //firebase의 tokenlist 수정
            // History list 작성
            writeHistory(seller, account, price, tokenId, nftAddr);
            console.log("작성완료")
        } catch(e) {
            console.log(e);
        return e;
        }
    };

    // Event listener
    const handleClick = () => {
        buyItem(nftAddr, tokenId);
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