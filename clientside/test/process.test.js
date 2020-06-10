const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

const registerFactory = require("../ethereum/build/RegisterPatient.json");
const compliepatientContract = require("../ethereum/build/PatientContract.json");

let accounts;
let factory;
let patientContractaddress;
let patientContract;
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(registerFactory.abi)
        .deploy({ data: registerFactory.bytecode })
        .send({ from: accounts[0], gas: "1000000" });

    await factory.methods.Register("0x450f4F21a0717bdB41b62Fb1e8bee1680b9A1a78",
        "0x1833894eCc8586d988A74cAaaf761bE59914b137",
        accounts[0])
        .send({ from: accounts[0], gas: "1000000" });

    [patientContractaddress] = await factory.methods.getRegisteredPatients().call();
    patientContract = await new web3.eth.Contract(
        compliepatientContract.abi,
        patientContractaddress
    );
});

describe("patientContracts", () => {
    it("deployes a factory and a patientContract ", () => {
        assert.ok(factory.options.address);
        assert.ok(patientContract.options.address);
    });
    it("checks if patientContract has the right manager", async () => {
        const manager = await patientContract.methods.PatientAddress().call();
        assert.equal("0x450f4F21a0717bdB41b62Fb1e8bee1680b9A1a78", manager);
    });
    it("cheks if the right party is storing the refence ", async () => {
        try {
            await patientContract.methods.StoreReferences("DAATAAHAASSHH", 85847).send({
                from: "0x450f4F21a0717bdB41b62Fb1e8bee1680b9A1a78"
            })
        } catch (err) {
            assert(err);
        }
    });
    it("Stores a reference", async () => {
        await patientContract.methods.StoreReferences("DAATAAHAASSHH", 85847).send({
            from: accounts[0]
        });
        const refs = await patientContract.methods.data_references(0).call();
        assert.equal("DAATAAHAASSHH", refs.DataHash);

    })
});
// 0x450f4F21a0717bdB41b62Fb1e8bee1680b9A1a78
// 0x1833894eCc8586d988A74cAaaf761bE59914b137
// 0xB47cCb9ee8084cFc61D738625b99C9c0Fd92E391
