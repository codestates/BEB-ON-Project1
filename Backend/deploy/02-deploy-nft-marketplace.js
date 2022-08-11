const { network, getNamedAccounts, deployments } = require("hardhat");
const { developmentChains } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log("------------------------------");
  args = [];
  const nftMarketplace = await deploy("NftMarketplace", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: 1,
  });

  // if (
  //   !developmentChains.includes(network.name) &&
  //   process.env.ETHERSCAN_API_KEY
  // ) {
  //   await verify(nftMarketplace.address, args);
  // }
};
