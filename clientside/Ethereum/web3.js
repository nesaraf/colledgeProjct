import Web3 from "web3";

let web3;
if (typeof window !== "undefined" && window.web3 !== "undefined") {
    // we are in browser and methamask isrunning.
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on the server or the user is not running methamask
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/61f94d5d41ef4aa8b1fb74410c7e62d2"
    );
    web3 = new Web3(provider);
}
export default web3