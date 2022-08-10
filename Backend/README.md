# 소개

---

스마트 컨트랙트를 배포하고 테스트(WIP)합니다.

배포와 동시에 이더스캔 검증이 가능합니다.

설정을 변경하여 배포할 네트워크를 선택할 수 있습니다(메인넷, 테스트넷, 로컬 네트워크).

---

# 시작하기

---

## 요구사항

---

- git
- Nodejs
- NPM

## 빠른 시작

---

```solidity
npm install
```

충돌이 발생할 경우

```
npm install --legacy-peer-deps
```

---

# 사용법

---

## 배포

디폴트: 로컬

```
hh deploy
```

네트워크 선택

```
hh deploy --network 'network name'
```

네트워크 추가

.env:

추가할 네트워크의 RPC URL 작성

```
RINKEBY_RPC_URL=https://eth-rinkeby.alchemyapi.io/v2/your-api-key
ROPSTEN_RPC_URL=https://eth-ropsten.alchemyapi.io/v2/your-api-key
PRIVATE_KEY=
REPORT_GAS=
UPDATE_FRONT_END=
ETHERSCAN_API_KEY=your-api-key
```

hardhat.config.js:

추가할 네트워크의 RPC URL .env에서 불러오기

networks 객체 수정

```jsx
const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL ||
  "https://eth-rinkeby.alchemyapi.io/v2/your-api-key";
// Add Ropsten Testnet
const ROPSTEN_RPC_URL =
  process.env.ROPSTEN_RPC_URL ||
  "https://eth-ropsten.alchemyapi.io/v2/your-api-key";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

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
	// Add Ropsten Testnet
	ropsten: {
	URL: ROPSTEN_
		}
  },
```

---

## 테스트

```
hh test
```
