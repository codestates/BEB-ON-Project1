const { ethers } = require("hardhat");
const fs = require("fs");
const { network } = require("hardhat");

const TOKEN_ABI_FILE = "../../web3-practice/src/constants/tokenAbi.json";
const TOKEN_ADDRESS_FILE =
  "../../web3-practice/src/constants/tokenAddress.json";
const MARKETPLACE_ABI = "../../web3-practice/src/constants/marketplaceAbi.json";
const MARKETPLACE_ADDRESS =
  "../../web3-practice/src/constants/marketplaceAddress.json";

module.exports = async () => {
  console.log("Updating ABIs");
  updateAbi("BasicNft", TOKEN_ABI_FILE);
  updateAbi("NftMarketplace", MARKETPLACE_ABI);
  console.log("Updating Addresses");
  updateAddress("BasicNft", TOKEN_ADDRESS_FILE);
  updateAddress("NftMarketplace", MARKETPLACE_ADDRESS);
};

async function updateAbi(contractName, abiFile) {
  const contract = await ethers.getContract(contractName);
  fs.writeFileSync(
    abiFile,
    contract.interface.format(ethers.utils.FormatTypes.json)
  );
}

async function updateAddress(contractName, addressFile) {
  const contract = await ethers.getContract(contractName);
  const chainId = network.config.chainId.toString();
  const currentAddresses = JSON.parse(fs.readFileSync(addressFile, "uft8"));
  if (chainId in currentAddresses) {
    if (!currentAddresses[chainId].includes(contract.address)) {
      currentAddresses[chainId].push(contract.address);
    }
  }
  currentAddresses[chainId] = [contract.address];
  fs.writeFileSync(addressFile, JSON.stringify(currentAddresses));
}
