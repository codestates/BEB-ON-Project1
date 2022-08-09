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

  console.log("Getting Contract Address & ABI...");
  const deployedContract = await ethers.getContract("BasicNft");
  const contractAddress = deployedContract.address;
  const contractAbi = deployedContract.interface.format(
    ethers.utils.FormatTypes.json
  );
  console.log("Done!");
  console.log("---------------------");

  fs.readFile("../../web3-practice/tools/abi.json");

  //   if (
  //     !developmentChains.includes(network.name) &&
  //     process.env.ETHERSCAN_API_KEY
  //   ) {
  //     await verify(nftMarketplace.address, args);
  //   }
};

module.exports.tags = ["all", "basicnft"];
