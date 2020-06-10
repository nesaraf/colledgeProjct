import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Button, Input, Form, Message } from "semantic-ui-react";
import factory from "../../Ethereum/factory";
import web3 from "../../Ethereum/web3";
import { Router } from "../../routes";

class NewPatient extends Component {
    state = {
        patientAddress: "",
        doctorAddress: "",
        localServerAddress: "0xB47cCb9ee8084cFc61D738625b99C9c0Fd92E391",
        loading: false,
    };

    onSubmit = async event => {
        event.preventDefault();
        this.setState({ loading: true, errormessage: "" });
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.Register(
                this.state.patientAddress,
                this.state.doctorAddress,
                this.state.localServerAddress).send({
                    from: accounts[0]
                });
            Router.pushRoute("/");
        } catch (err) {
            this.setState({ errormessage: err.message });
        }
        this.setState({ loading: false });
    };
    render() {
        return (
            <Layout>
                <div>
                    <h3>Register a New Patient</h3>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errormessage}>
                        <Form.Field>

                            <Input
                                label="Address of Patient"
                                value={this.state.patientAddress}
                                onChange={event =>
                                    this.setState({ patientAddress: event.target.value })
                                }
                            /><br /><br />
                            <Input
                                label="Address of doctor"
                                value={this.state.doctorAddress}
                                onChange={event =>
                                    this.setState({ doctorAddress: event.target.value })
                                }
                            /><br /><br />
                            {/* <Input
                                label="Address of local Server"
                                value={this.state.localServerAddress}
                                onChange={event =>
                                    this.setState({ localServerAddress: event.target.value })
                                }
                            /> */}
                        </Form.Field>

                        <Button loading={this.state.loading} primary type="submit">
                            Create
            </Button>
                        <Message error header="OOPS!" content={this.state.errormessage} />
                    </Form>
                </div>
            </Layout>
        );
    }
}
export default NewPatient;