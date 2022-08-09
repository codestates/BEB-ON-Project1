const { ethers } = require("hardhat");

async function mintAndList() {
  const nftMarketplace = await ethers.getContract("NftMarketplace");
}

mintAndList()
  .then(() => {
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
