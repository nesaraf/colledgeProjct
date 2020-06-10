var express = require('express');
var router = express.Router();
const CryptoJs = require('crypto-js')
const { verifyToken } = require('../config/auth');
const jwt = require('jsonwebtoken');

let dataModel = require('../models/data.model');


router.get('/get/:dataHash', verifyToken, (req, res) => {

    jwt.verify(req.token, 'blalalbalbal', (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const newLocal = req.params.dataHash;
            dataModel.findOne({ dataHash: newLocal })
                .then(data => res.send(data))
                .catch(err => res.status(400).json(`Error:${err}`));
        }
    });

})

router.post('/save', async (req, res) => {
    const data = req.body.data;
    const hashvalue = CryptoJs.SHA256(req.body.data);
    const dataHash = hashvalue.toString(CryptoJs.enc.Hex);
    const dataOwner = req.body.dataOwner;
    const date = (req.body.date);
    // const patient = Patient.getContract(dataOwner);

    if (dataHash === req.body.dataHash) {

        const newData = new dataModel({ data, dataHash, dataOwner, date })
        newData.save().then(response => { res.json('Data Saved!!') })
            .catch(err => res.status(400).json(`Error:${err}`));
        res.send(newData);
        Router.pushRoute("/");

    }
    else {
        res.send({ Message: 'Hash did not match!!' });
    }
})

module.exports = router;