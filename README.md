# Project Title

# 🌃 Opensea Clone Coding 🌇

---

# Project Description

1. Short Introduction
    
    
    이 프로젝트는 오픈씨 클론코딩입니다!
    

    백엔드에서 ERC721 기반 토큰 컨트랙트와marketplace 컨트랙트를 배포합니다.  Marketplace 컨트랙트는 토큰의 판매권한을 부여 받아 토큰의 판매및       관리를 담당하며, 판매자의 수익(proceeds)또한 관리합니다. 배포와 동시에 프론트엔드에 ABI와 컨트랙트 주소를 전송하여 web3.js등을 활용한 컨트랙트와     의 소통을 지원합니다.

    프론트엔드는 토큰 발행, 판매등록, 판매, 구매 , 거래내역 조회 등 기본적인 NFT Marketplace의 기능을 지원합니다. 사용자는 Metamask를 통하여 블   록체인과 소통합니다.

1. Built with
    - Front-end
    
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> SPA 구현을 위한 라이브러리!
        
        NFT.Storage: NFT의 metadata를 IPFS에 배포합니다!
        
    - Back-end
        
        HARDHAT👷‍♂️: 스마트 컨트랙트 개발, 테스트 그리고 배포. 튼튼딴딴한 컨트랙트를 위하여!
        
    - Database
        
        <img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />  Serverless Database! 개발의 난이도를 낮추어 시간을 절약하게 해줍니다!
        

---

# Getting Started

## Back-end

- 로컬에서 배포, hardhat local node 운용
    
    먼저 컨트랙트를 배포합니다.
    
    컨트랙트의 배포가 완료되면 프론트엔드의 컨트랙트 ABI와 ADDRESS 파일이 업데이트 됩니다.
    
    ```
    hh deploy
    ```
    
    아래 커맨드를 사용하여 로컬에서 노드를 운용합니다.
    
    프론트엔드와 소통하기 위해 커맨드를 열어두어야 합니다.
    
    ```
    hh node
    ```
    
- 테스트넷에 배포
    
    컨트랙트를 테스트넷에 배포합니다.
    
    로컬의 노드를 운용하지 않으므로 위의 경우와 같이 ‘hh node’로 로컬의 노드를 구동할 필요가 없습니다.
    
    ```
    hh deploy --network 'network name'
    ```
    
    사용하는 테스트넷은 사전에 ‘hardhat.config.js’에 작성해 두어야 합니다.
    
    예시)
    
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
    		// 이곳에 네트워크를 추가합니다.
      },
    ```
    

## Front-end

컨트랙트가 배포되면 constants 디렉토리에 컨트랙트의 ABI와 컨트랙트 주소가 기록됩니다.

컨트랙트의 주소는 사용하는 네트워크의 Chain Id와 함께 저장됩니다.

예시)

```jsx
// tokenAddress.json
{
  "31337": "0x4bDFdA0535483e6a19D0E13243bEb37889e3cB26", // 로컬
  "4": "0x39a475635b9D73e7dD8336B035781d0C51Ec367a" // 링크비
}
```

사용하는 네트워크에 따라 체인Id를 변경합니다.

예시)

```jsx
const tokenAddr = tokenAddress[4];
const marketAddr = marketplaceAddress[4];
```

---

# Demo

링크 추가 예정

---

# Roadmap
- [x] 컨트랙트 개발, 배포
- [x] 프론트엔드 핵심 기능 구현
- [ ] 프론트엔드 스타일링
- [ ] 백엔드, 프론트엔트 테스트 코드 작성, 테스트

---

# Authors

- 김다한 - [https://github.com/Dahankim89](https://github.com/Dahankim89)
    
    프론트엔드:
    
    백엔드:
    
- 긴도현 - [https://github.com/bcdy19](https://github.com/bcdy19)
    
    프론트엔드:
    
    백엔드:
    
- 오정헌 - [https://github.com/JSND-OJ00](https://github.com/JSND-OJ00)
    
    프론트엔드:
    
    백엔드:

- 오하영 - [https://github.com/Hayoung5](https://github.com/Hayoung5)
    
    프론트엔드:
    
    백엔드:
---

# License

## MIT
