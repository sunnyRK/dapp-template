const web3 = require('./web3');

const abi ='';
const address = "";
const jsonAbi = JSON.parse(abi);

// Setup contract
const contract = new web3.eth.Contract(jsonAbi, address);    
module.exports =  contract;
