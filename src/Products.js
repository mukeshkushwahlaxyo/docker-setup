import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { ApiDispatcher } from "./ApiDispatcher";

export class Products extends React.Component {

    state = {
        products: {}
    }

    apidispatcher = new ApiDispatcher();

    getUrl() {
        var url = this.apidispatcher.dispatch(this.props.vendor) + `products?limit=50&`;
        if (this.props.brand != null) {
            url += 'brand=' + this.props.brand;
        }

        return url;
    }

    componentDidMount() {
        axios.get(this.getUrl())
            .then(res => {
                const products = res.data;
                this.setState({ products });
                console.log(this.state);
            })
    }

    render() {
        if (this.state.products.result == null) {
            return <p>Loading products</p>
        } else {
            const productsHtml = this.state.products.result.map((product, index) =>
                <tr>
                    <td>{index + 1}</td>
                    <td>
                        <Link to={`/vendors/${this.props.vendor}/products/${product.id}`}>{product.id}</Link>
                    </td>
                    <td>{product.name}</td>
                    <td>{product.brand}</td>
                </tr>
            )

            return <div>
                <p>Total: {this.state.products.count}</p>


                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsHtml}
                    </tbody>
                </table>

                <p>Page 1 / 10</p>
                <p>Next/ preview</p>

            </div>
        }
    }
}