pragma solidity >=0.6.1;


contract RegisterPatient {
    address[] PatientsList;

    function Register(address patientAdd, address doctorAdd, address local_S)
        public
    {
        address newPatient = address(
            new PatientContract(patientAdd, doctorAdd, local_S)
        );
        PatientsList.push(newPatient);
    }

    function getRegisteredPatients() public view returns (address[] memory) {
        return PatientsList;
    }
}


contract PatientContract {
    struct DataReference {
        string DataHash;
        string TimeStamp;
    }

    address public PatientAddress;
    address public DoctorAdress;
    address public LocalServer;
    DataReference[] public data_references;

    constructor(address Patient, address Doctor, address LocalServerAdd)
        public
    {
        PatientAddress = Patient;
        DoctorAdress = Doctor;
        LocalServer = LocalServerAdd;
    }

    // modifier Restricted() {
    //     require(
    //         msg.sender == PatientAddress ||
    //             msg.sender == DoctorAdress ||
    //             msg.sender == LocalServer
    //     );
    //     _;
    // }

    function StoreReferences(string memory DataHash, string memory TimeStamp)
        public
    {
        require(msg.sender == PatientAddress);
        DataReference memory newDataReference = DataReference({
            DataHash: DataHash,
            TimeStamp: TimeStamp
        });

        data_references.push(newDataReference);
    }

    function GetReferences(address caller) public view returns (uint256) {
        require(caller == PatientAddress || caller == DoctorAdress);
        return data_references.length;
    }
}
