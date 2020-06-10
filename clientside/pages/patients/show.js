import React from "react";
import Layout from "../../components/Layout";
import Patient from "../../Ethereum/patient";
import truncateMiddle from "truncate-middle";
// import header from "../../components/header";
import { Card, Table, Grid, Button, Popup, GridColumn, GridRow } from "semantic-ui-react";
import web3 from "../../Ethereum/web3";
import { Link } from "../../routes";

class patientShow extends React.Component {
    static async getInitialProps(props) {

        const accounts = await web3.eth.getAccounts();
        const { address } = props.query;
        const patient = Patient(address);



        const referencesCount = await patient.methods.GetReferences(`0x1833894eCc8586d988A74cAaaf761bE59914b137`).call();
        const references = await Promise.all(
            Array(parseInt(referencesCount))
                .fill()
                .map((element, index) => {
                    return patient.methods.data_references(index).call();
                })
        );


        return {
            references, address
        };

    }

    PopupAddress(text) {
        return (

            <Popup content={text}
                trigger={<Button content={truncateMiddle(text, 5, 5, '....')} />} />

        )
    }
    renderRow() {


        return this.props.references.map((link, index) => {
            return (
                <Table.Row>
                    <Table.Cell>{index}</Table.Cell>
                    <Table.Cell>{link.TimeStamp}</Table.Cell>
                    <Table.Cell>
                        {this.PopupAddress(link.DataHash)}
                    </Table.Cell>
                    <Table.Cell>
                        <Link route={`/records/read/${link.DataHash}`}>Read</Link>
                    </Table.Cell>
                </Table.Row>
            )
        });

    }
    render() {
        const { address } = this.props;
        return (
            <Layout>
                <Grid >
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Table>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>ID</Table.HeaderCell>
                                        <Table.HeaderCell>Time</Table.HeaderCell>
                                        <Table.HeaderCell>Reference</Table.HeaderCell>
                                        <Table.HeaderCell>Read</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>{this.renderRow()}</Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <Link route={`/records/add/${address}`}>
                                <a>
                                    <Button
                                        content="send data"
                                        primary
                                        floated="right"

                                    />
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid >
            </Layout >
        );
    }
}
export default patientShow;
