import React from "react";
import axios from "axios";
import Layout from "../../../components/Layout";
import { CardGroup, Card, Button } from "semantic-ui-react";
import { Link } from "../../../routes";
import truncateMiddle from "truncate-middle";
import Router from 'next/router';



class dataRead extends React.Component {

    static async getInitialProps(props) {
        const { referenceKey } = props.query;
        function getData(key) {
            if (typeof localStorage !== 'undefined') {
                const authData = localStorage.getItem('19divoc');

                return axios.get(`http://localhost:5000/info/get/${key}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `bearer ${authData}`
                    }
                })
                    .then(res => {
                        const item = res;
                        return item.data;
                    }).catch((error) => {
                        const errStatus = error.response.status;
                        if (errStatus === 403) {
                            Router.push('/login');
                        } else {
                            Console.log('WTF')
                        }
                    });
            } else {
                return ({ message: 403 })
            }
        }
        const refData = await getData(referenceKey)
        return { referenceKey, refData }

    }

    renderData() {

        const {
            referenceKey,
            refData
        } = this.props
        if (refData.message === 403) {
            return (
                <Card.Content
                    header="You need to log in"
                    meta={<Link route={`/login`}>
                        <Button color='red' content="Login" /></Link>}
                    description=''
                />
            )
        }
        return (
            <Card.Content
                header={truncateMiddle(refData.dataHash, 5, 5, '.....')}
                meta={refData.createdAt}
                description={refData.data}
            />
        )

    }


    render() {
        return (
            <Layout>
                <CardGroup>
                    <Card>
                        {this.renderData()}
                    </Card>
                </CardGroup>
            </Layout>
        );
    }
}
export default dataRead;