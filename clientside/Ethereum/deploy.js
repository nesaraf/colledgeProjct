const HDWalletProvider = require("truffle-hdwallet-provider");

const Web3 = require("web3");
const compilefactory = require("./build/RegisterPatient.json");
const provider = new HDWalletProvider(
    "remember tackle bridge cheese weapon upper culture phrase economy voyage water bacon",
    "https://rinkeby.infura.io/v3/61f94d5d41ef4aa8b1fb74410c7e62d2"
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attampting to deploy from account", accounts[0]);

    const result = await new web3.eth.Contract(compilefactory.abi)
        .deploy({ data: "0x" + compilefactory.bytecode })
        .send({ from: accounts[0] });
    console.log("Contract deployed to ", result.options.address);
};
deploy();
