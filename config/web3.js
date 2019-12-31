const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
let web3;
if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
}else{
    // we are in the server and matamask is not using by user
    const provider = new HDWalletProvider(
        '<Add Pass phrase of your metamask here>', // metamask
        'https://kovan.infura.io/v3/<ADD KOVAN ID HERE>'
    );
    web3 = new Web3(provider);
}
// export default web3;
module.exports = web3
