import React from 'react';
import axios from 'axios';
import Layout from "../../components/Layout";
import { Button, Input, Form, Message, Icon } from "semantic-ui-react";
import Router from 'next/router';



class addRecord extends React.Component {
    componentDidMount() {
        this.resetForm();
    }

    state = {
        email: '',
        passworrd: '',
        loading: false,
    }
    resetForm() {
        this.setState({
            email: '',
            password: '',
            loading: false
        })
    }
    onSubmit = async event => {
        this.state.loading = true;

        event.preventDefault();
        // hash the data
        const { email, password } = this.state;
        const data = {
            email: email,
            password: password
        }
        axios.post('http://localhost:5000/users/api/login', data
        ).then(res => {
            localStorage.setItem('19divoc', res.data.token, { httpOnly: true });
            this.resetForm();
            Router.back();

        }).catch(error => console.log(error));

    }
    render() {
        return (
            <Layout>
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Field>
                            <Input
                                label="Email"
                                value={this.state.email}
                                onChange={event => this.setState({ email: event.target.value })} type="email" />

                            <Input
                                label="Password"
                                value={this.state.password}
                                onChange={event => this.setState({ password: event.target.value })}
                                type="password" />
                        </Form.Field>
                        <Button loading={this.state.loading} className="btn btn-primary">Submit</Button>
                    </Form>
                </div>
            </Layout >
        );
    }
}
export default addRecord;