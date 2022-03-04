// /https://eth-ropsten.alchemyapi.io/v2/W0y9R-Snol6d2HF2Zzyd-IKvO5VEhqAg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/W0y9R-Snol6d2HF2Zzyd-IKvO5VEhqAg',
      accounts: ['f40d40f87f727010e86af2978812785af5b24e42d59a22b6cd86babe400d1100']
    }
  }
}