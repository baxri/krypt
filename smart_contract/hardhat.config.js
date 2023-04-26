require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  etherscan: {
    apiKey: "FRA9DM7T7U1RHUBBRJ3A3MP8B2MMH2Q73S",
  },
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [""],
    },
    polygon: {
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [""],
      gas: "auto",
      gasPrice: "auto",
    },
  },
};
