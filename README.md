# Project Title

# ๐ย Opensea Clone Coding ๐

---

# Project Description
![๋ค์ด๋ก๋](https://user-images.githubusercontent.com/66237684/184765712-4ea72ef3-061e-4a74-a606-59a5104c2c9d.png)

1. Short Introduction
    
    
    ์ด ํ๋ก์ ํธ๋ ์คํ์จ ํด๋ก ์ฝ๋ฉ์๋๋ค!
    

    ๋ฐฑ์๋์์ ERC721 ๊ธฐ๋ฐ ํ ํฐ ์ปจํธ๋ํธ์ marketplace ์ปจํธ๋ํธ๋ฅผ ๋ฐฐํฌํฉ๋๋ค.  Marketplace ์ปจํธ๋ํธ๋ ํ ํฐ์ ํ๋งค๊ถํ์ ๋ถ์ฌ ๋ฐ์ ํ ํฐ์ ํ๋งค ๋ฐ       ๊ด๋ฆฌ๋ฅผ ๋ด๋นํ๋ฉฐ, ํ๋งค์์ ์์ต(proceeds)๋ํ ๊ด๋ฆฌํฉ๋๋ค. ๋ฐฐํฌ์ ๋์์ ํ๋ก ํธ์๋์ ABI์ ์ปจํธ๋ํธ ์ฃผ์๋ฅผ ์ ์กํ์ฌ web3.js๋ฑ์ ํ์ฉํ ์ปจํธ๋ํธ์     ์ ์ํต์ ์ง์ํฉ๋๋ค.

    ํ๋ก ํธ์๋๋ ํ ํฐ ๋ฐํ, ํ๋งค๋ฑ๋ก, ํ๋งค, ๊ตฌ๋งค , ๊ฑฐ๋๋ด์ญ ์กฐํ ๋ฑ ๊ธฐ๋ณธ์ ์ธ NFT Marketplace์ ๊ธฐ๋ฅ์ ์ง์ํฉ๋๋ค. ์ฌ์ฉ์๋ Metamask๋ฅผ ํตํ์ฌ ๋ธ   ๋ก์ฒด์ธ๊ณผ ์ํตํฉ๋๋ค.

2. Built with
    - Front-end
    
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> SPA ๊ตฌํ์ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ!
        
        NFT.Storage: NFT์ metadata๋ฅผ IPFS์ ๋ฐฐํฌํฉ๋๋ค!
        
    - Back-end
        
        HARDHAT๐ทโโ๏ธ: ์ค๋งํธ ์ปจํธ๋ํธ ๊ฐ๋ฐ, ํ์คํธ ๊ทธ๋ฆฌ๊ณ  ๋ฐฐํฌ. ํผํผ๋ด๋ดํ ์ปจํธ๋ํธ๋ฅผ ์ํ์ฌ!
        
    - Database
        
        <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />  Serverless Database! ๊ฐ๋ฐ์ ๋์ด๋๋ฅผ ๋ฎ์ถ์ด ์๊ฐ์ ์ ์ฝํ๊ฒ ํด์ค๋๋ค!
        
3. Functions
    - Explore: ํ๋งค์ค์ธ NFT ๋ชฉ๋กList

    - Activity: ๋ด ๊ฑฐ๋ ๋ด์ญ

    - Create: NFT Minting

    - Mypage: ๋ด๊ฐ ์์ ํ NFT ์กฐํ

    - NFTdetail: NFT ์์ธ ์กฐํ ๋ฐ ๊ตฌ๋งค

    - Wallet: ์นํ์ด์ง์ MetaMask ์ง๊ฐ๊ณผ ์ฐ๊ฒฐ
---

# Getting Started

## Back-end

- ๋ก์ปฌ์์ ๋ฐฐํฌ, hardhat local node ์ด์ฉ
    
    ๋จผ์  ์ปจํธ๋ํธ๋ฅผ ๋ฐฐํฌํฉ๋๋ค.
    
    ์ปจํธ๋ํธ์ ๋ฐฐํฌ๊ฐ ์๋ฃ๋๋ฉด ํ๋ก ํธ์๋์ ์ปจํธ๋ํธ ABI์ ADDRESS ํ์ผ์ด ์๋ฐ์ดํธ ๋ฉ๋๋ค.
    
    ```
    hh deploy
    ```
    
    ์๋ ์ปค๋งจ๋๋ฅผ ์ฌ์ฉํ์ฌ ๋ก์ปฌ์์ ๋ธ๋๋ฅผ ์ด์ฉํฉ๋๋ค.
    
    ํ๋ก ํธ์๋์ ์ํตํ๊ธฐ ์ํด ์ปค๋งจ๋๋ฅผ ์ด์ด๋์ด์ผ ํฉ๋๋ค.
    
    ```
    hh node
    ```
    
- ํ์คํธ๋ท์ ๋ฐฐํฌ
    
    ์ปจํธ๋ํธ๋ฅผ ํ์คํธ๋ท์ ๋ฐฐํฌํฉ๋๋ค.
    
    ๋ก์ปฌ์ ๋ธ๋๋ฅผ ์ด์ฉํ์ง ์์ผ๋ฏ๋ก ์์ ๊ฒฝ์ฐ์ ๊ฐ์ด โhh nodeโ๋ก ๋ก์ปฌ์ ๋ธ๋๋ฅผ ๊ตฌ๋ํ  ํ์๊ฐ ์์ต๋๋ค.
    
    ```
    hh deploy --network 'network name'
    ```
    
    ์ฌ์ฉํ๋ ํ์คํธ๋ท์ ์ฌ์ ์ โhardhat.config.jsโ์ ์์ฑํด ๋์ด์ผ ํฉ๋๋ค.
    
    ์์)
    
    ```jsx
    // hardhat.config.js
    
    require("@nomiclabs/hardhat-waffle");
    require("@nomiclabs/hardhat-etherscan");
    require("hardhat-deploy");
    require("solidity-coverage");
    require("hardhat-gas-reporter");
    require("hardhat-contract-sizer");
    require("dotenv").config();
    
    /**
     * @type import('hardhat/config').HardhatUserConfig
     */
    
    const RINKEBY_RPC_URL =
      process.env.RINKEBY_RPC_URL ||
      "https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
    const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
    const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
    
    module.exports = {
      defaultNetwork: "hardhat",
      networks: {
        hardhat: {
          chainId: 31337,
          blockConfirmations: 6,
        },
        rinkeby: {
          url: RINKEBY_RPC_URL,
          accounts: [PRIVATE_KEY],
          chainId: 4,
          blockConfirmations: 6,
        },
    		// ์ด๊ณณ์ ๋คํธ์ํฌ๋ฅผ ์ถ๊ฐํฉ๋๋ค.
      },
    ```
    

## Front-end

์ปจํธ๋ํธ๊ฐ ๋ฐฐํฌ๋๋ฉด constants ๋๋ ํ ๋ฆฌ์ ์ปจํธ๋ํธ์ ABI์ ์ปจํธ๋ํธ ์ฃผ์๊ฐ ๊ธฐ๋ก๋ฉ๋๋ค.

์ปจํธ๋ํธ์ ์ฃผ์๋ ์ฌ์ฉํ๋ ๋คํธ์ํฌ์ Chain Id์ ํจ๊ป ์ ์ฅ๋ฉ๋๋ค.

์์)

```jsx
// tokenAddress.json
{
  "31337": "0x4bDFdA0535483e6a19D0E13243bEb37889e3cB26", // ๋ก์ปฌ
  "4": "0x39a475635b9D73e7dD8336B035781d0C51Ec367a" // ๋งํฌ๋น
}
```

์ฌ์ฉํ๋ ๋คํธ์ํฌ์ ๋ฐ๋ผ ์ฒด์ธId๋ฅผ ๋ณ๊ฒฝํฉ๋๋ค.

์์)

```jsx
const tokenAddr = tokenAddress[4];
const marketAddr = marketplaceAddress[4];
```

---

# Demo

๋งํฌ ์ถ๊ฐ ์์ 

---

# Roadmap
- [x] ์ปจํธ๋ํธ ๊ฐ๋ฐ, ๋ฐฐํฌ
- [x] ํ๋ก ํธ์๋ ํต์ฌ ๊ธฐ๋ฅ ๊ตฌํ
- [ ] ํ๋ก ํธ์๋ ์คํ์ผ๋ง
- [ ] ๋ฐฑ์๋, ํ๋ก ํธ์ํธ ํ์คํธ ์ฝ๋ ์์ฑ, ํ์คํธ

---

# Authors

### ๊น๋คํ - [https://github.com/Dahankim89](https://github.com/Dahankim89)
* Position: Front-End
* Stack : NODE js, React, React-Hooks, Firebase-DB
* Contribution :
  * Home ํ์ด์ง ๊ตฌํ (๋ก๊ทธ์ธ)
  * ๋ฉํ๋ง์คํฌ ์ง๊ฐ ์ฐ๊ฒฐ ๊ธฐ๋ฅ ๊ตฌํ
  * Nav ๊ตฌํ
  * Footer ๊ตฌํ
  * Explore ๊ธฐ๋ฅ ๊ตฌํ
  * Activity ํ์ด์ง ๊ตฌํ
    
### ๊น๋์ - [https://github.com/bcdy19](https://github.com/bcdy19)
* Position: Front-End
* Stack : NODE js, React, React-Hooks,Firebase-DB
* Contribution :
  * Mypage ํ์ด์ง ๊ตฌํ
  * NFT detail ํ์ด์ง ๊ตฌํ
    
### ์ค์ ํ - [https://github.com/JSND-OJ00](https://github.com/JSND-OJ00)
* Position: Front-End, Smart-Contract, Back-End
* Stack : NODE js, React-Hooks, React, Firebase-DB, HardHat
* Contribution :
  * Hardhat contract deploy ๊ตฌํ
  * marcket place Contract ๊ตฌํ
  * Create ํ์ด์ง ๊ตฌํ (ํ์ผ ์๋ก๋์ IPFS๋ฅผ ์ฌ์ฉํ ๋ฉํ๋ฐ์ดํฐ ์์ฑ, ๋ฏผํ ๊ธฐ๋ฅ)

### ์คํ์ - [https://github.com/Hayoung5](https://github.com/Hayoung5) 
* Position: Front-End, Smart-Contract
* Stack : NODE js, React-Hooks, React, Firebase-DB
* Contribution :
  * SellRegistration ๊ธฐ๋ฅ ๊ตฌํ
  * BuyNFT ๊ธฐ๋ฅ ๊ตฌํ
  * ProceedManage ๊ธฐ๋ฅ ๊ตฌํ
  * Firebase db ์์ฑ, ์ฐ๋
  * ๊นํ๋ธ ๊ด๋ฆฌ, ํตํฉ
  
---

# License

## MIT
