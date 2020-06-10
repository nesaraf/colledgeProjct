import web3 from "./web3";
import PatientContract from "./build/PatientContract.json";

export default address => {
    return new web3.eth.Contract(PatientContract.abi, address);
};