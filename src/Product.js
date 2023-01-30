import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { Sidebar } from "./Sidebar";
import { ApiDispatcher } from "./ApiDispatcher";

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

// export 
class Product extends React.Component {

    state = {
        product: null,
        logs: null
    }

    apidispatcher = new ApiDispatcher();

    componentDidMount() {
        // let { id } = this.props.params;
        // console.log()

        axios.get(this.apidispatcher.dispatch(this.props.params.vendor) + `products/${this.props.params.productId}`)
            .then(res => {
                const product = res.data;
                this.setState({ product: product });
                console.log(this.state);
                console.log(product);
            })

        axios.get(this.apidispatcher.dispatch(this.props.params.vendor) + `products/${this.props.params.productId}/logs`)
            .then(res => {
                const logs = res.data;
                this.setState({ logs: logs });
            })
    }

    render() {
        if (this.state.product == null) {
            return <div className="page">
                <Sidebar />
                <div>
                    <p>Loading product</p>
                </div>
            </div>
        } else {

            var imagesHtml = this.state.product.images.map((img) =>
                <img src={`${img}`} />
            )

            var contentHtml = Object.keys(this.state.product.content).map((key) =>
                <p>
                    <h5>{key}</h5>
                    <p>{JSON.stringify(this.state.product.content[key])}</p>
                    <hr />
                </p>
            )

            var logsHtml;
            if (this.state.logs != null) {
                var logsData = Object.keys(this.state.logs).map((changeOn) =>
                    this.state.logs[changeOn].map((log, index) =>
                        log.fields.map((field) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{log.id.date}</td>
                                <td>{field.field}</td>
                                <td>{field.oldValue}</td>
                                <td>{field.newValue}</td>
                                <td>{changeOn}</td>
                            </tr>
                        )
                    )
                )

                logsHtml = <div>
                    <hr /><p>Logs</p>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Field</th>
                                <th>Old</th>
                                <th>New</th>
                                <th>Change on</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logsData}
                        </tbody>
                    </table>


                </div>
            } else {
                logsHtml = <div><hr /><p>Logs</p></div>;
            }


            return <div className="page">
                <Sidebar />
                <div>
                    <p>Product {this.props.params.productId}</p>
                    {/* <p>Added: xx</p>
                    <p>Updated: xx</p> */}

                    <h3>{this.state.product.id}</h3>
                    {contentHtml}

                    <p>Images</p>
                    {imagesHtml}

                    {logsHtml}

                </div>
            </div>
        }
    }
}


export default withParams(Product);