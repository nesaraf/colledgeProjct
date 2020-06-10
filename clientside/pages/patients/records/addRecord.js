import React from 'react';
import axios from 'axios';
import Patient from '../../../Ethereum/patient';
import CryptoJs from 'crypto-js';
import Layout from "../../../components/Layout";
import { Button, Input, Form, Message } from "semantic-ui-react";
import web3 from "../../../Ethereum/web3";
import Router from 'next/router';


class addRecord extends React.Component {
    static async getInitialProps(props) {
        const { address } = props.query
        return { address }
    }

    state = {
        data: '',
        dataHash: '',
        dataOwner: this.props.address,
        date: '',
        loading: false,
        uploadedToChain: false,
    }
    renderDate() {

        const tempDate = new Date();
        const date = (tempDate.getMonth() + 1)
            + '-' + tempDate.getDate() + '-'
            + tempDate.getFullYear() + ' at ';
        const timeNow = tempDate.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        })
        const dateTime = date + timeNow;
        return (
            dateTime
        );
    }
    onSubmit = async event => {
        event.preventDefault();
        // console.log(this.renderDate());
        // hash the data
        const refer = this.state.data;
        const hashedRefer = CryptoJs.SHA256(refer);
        const { address } = this.props;
        const item =
        {
            data: refer,
            dataHash: hashedRefer.toString(CryptoJs.enc.Hex),
            dataOwner: this.state.dataOwner,
            date: this.renderDate()
        }
        const patient = Patient(address);

        try {
            this.state.loading = true;
            const accounts = await web3.eth.getAccounts();
            await patient.methods.StoreReferences(
                item.dataHash,
                item.date).send({
                    from: accounts[0],
                });
            this.state.uploadedToChain = true;
        } catch (err) {
            console.log({ errormessage: err.message });
        }
        // send to private server
        if (this.state.uploadedToChain == true) {
            axios.post('http://localhost:5000/info/save', item)
                .then(res => console.log(res.data))
                .catch(error => console.log(error));


            this.setState({
                data: '',
                dataHash: '',
                date: '',
                loading: false,
                uploadedToChain: false
            })
            Router.back();
        }
    }
    render() {
        const { address } = this.props;
        return (
            <Layout>
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <Input
                                label="Input Data"
                                value={this.state.data}
                                onChange={event => this.setState({ data: event.target.value })} />

                            <Input
                                label="Data Owner"
                                value={this.state.dataOwner} disabled
                            />

                            {/* <Input
                                label="Date "
                                value={this.state.date}
                                onChange={event => this.setState({ date: event.target.value })} /> */}
                        </Form.Field>
                        <Button loading={this.state.loading} className="btn btn-primary">Submit</Button>
                    </Form>
                </div>
            </Layout>
        );
    }
}
export default addRecord;