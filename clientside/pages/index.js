import React from "react";
import factory from "../Ethereum/factory";
import { Card, Icon, Button } from "semantic-ui-react";
// import { Card, Icon, Image } from "semantic-ui-css";
import Layout from "../components/Layout";
import { Link } from "../routes";

class Recordindex extends React.Component {
    static async getInitialProps() {
        const patients = await factory.methods.getRegisteredPatients().call();
        return { patients };
    }
    renderPatients() {
        const items = this.props.patients.map(address => {
            return {
                header: `patients Adress: ${address}`,
                description: (
                    <Link route={`/records/${address}`}>
                        <a>show Records</a>
                    </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }
    render() {
        return (
            <Layout>
                <div>
                    <h2>registerd patients</h2>

                    <Link route="/newPatient/register">
                        <a>
                            <button
                                style={{ float: "right" }}
                                className="ui icon right labeled button primary"
                            >
                                <i aria-hidden="true" className="plus icon"></i>
                Register new patient
              </button>
                        </a>
                    </Link>
                    {this.renderPatients()}
                </div>
            </Layout>
        );
    }
}
export default Recordindex;