
const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

const buildpath = path.resolve(__dirname, "build");
fs.removeSync(buildpath);

const campaignpath = path.resolve(__dirname, "contracts", "contract.sol");
const source = fs.readFileSync(campaignpath, "utf8");
const input = {
    language: 'Solidity',
    sources: {
        'contract.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            }
        }
    }

};
// compiling the contract and writing it output veriable
const output = JSON.parse(solc.compile(JSON.stringify(input)));

//checking if directory exists
fs.ensureDirSync(buildpath);
console.log(output.contracts);

//looping in output objct and get each existing contract to write to a json object in build directory

for (let Key in output.contracts['contract.sol']) {

    fs.outputJSONSync(
        path.resolve(buildpath, `${Key}.json`),
        {
            abi: output.contracts['contract.sol'][Key]['abi'],
            bytecode: output.contracts['contract.sol'][Key]['evm']['bytecode']["object"]
        }, {
        spaces: 2,
        EOL: '\n'
    }
    );


}

