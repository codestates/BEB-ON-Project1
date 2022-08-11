const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const fs = require("fs");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("---------------------");
  console.log("Deploying Contract...");
  args = [];
  const basicNft = await deploy("BasicNft", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 1,
  });

  //   if (
  //     !developmentChains.includes(network.name) &&
  //     process.env.ETHERSCAN_API_KEY
  //   ) {
  //     await verify(nftMarketplace.address, args);
  //   }
};
