import web3 from "./web3";
import RegisterPatien from "./build/RegisterPatient.json";

const instance = new web3.eth.Contract(
    RegisterPatien.abi,
    "0x3E436cE5C52c48DA4301A52be2C5EE493dcFB73a"
);

export default instance;