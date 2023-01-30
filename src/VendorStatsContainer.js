import { Component } from "react";
import { Link, useParams } from "react-router-dom"
import { Sidebar } from "./Sidebar";
import axios from 'axios';
import { ApiDispatcher } from "./ApiDispatcher";
import { Button } from "bootstrap";

//TODO copypaste
function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class VendorStatsContainer extends Component {

    //TODO validate if one of imlss,seclock etc

    state = {
        vendor: this.props.params.vendor,
        type: 'count',
        days: 7,
        products: null
    }

    apidispatcher = new ApiDispatcher();

    componentDidMount() {
        // this.reload();
    }


    changeType(type) {
        // this.setState({ type: type })
        this.reload(type, this.state.days);
    }

    changeDays(days) {
        // this.setState({ days: days })
        this.reload(this.state.type, days);
    }

    reload(type, days) {
        console.log("reload ",this.state);
        var url = this.apidispatcher.dispatch(this.state.vendor) + 'products/stats/' + type + '?days=' + days;
        console.log(url);
        axios.get(url)
            .then(res => {
                const products = res.data;
                this.setState({ 
                    products: products,
                    type:type,
                    days:days
                });
                console.log(this.state);
            })
    }


    render() {
        console.log("render ",this.state);
        const productsHtml = this.state.products == null ? <div >Select type</div> :
            <div>
                <p>Total changes: {this.state.products.totalChanges}</p>

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>{this.state.type}</th>
                            {
                                this.state.type === 'priceDeltaSum' || this.state.type === 'pricedCountSum' ?  <th>Count</th> : ''
                            }
                            <th>Name</th>
                            <th>Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.products.map((product, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link to={`/vendors/${this.state.vendor}/products/${product.id}`}>{product.id}</Link>
                                    </td>
                                    <td>{product[this.state.type]}</td>
                                    {
                                        this.state.type === 'priceDeltaSum' || this.state.type === 'pricedCountSum' ? <td>{product.count}</td> : ''
                                    }
                                    <td>{product.name}</td>
                                    <td>{product.brand}</td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>;

        return <div className="page">
            <Sidebar />

            <div style={{ width: "600px" }}>
                <button onClick={() => this.changeType('count')}>Movements count</button>
                <button onClick={() => this.changeType('sum')}>Movements Sum</button>
                <button onClick={() => this.changeType('priceDeltaSum')}>Movements Priced Sum (suma delt ilości * cena)</button>
                <button onClick={() => this.changeType('pricedCountSum')}>Movements Priced Count (suma zmian * cena)</button>
                <hr></hr>

                <button onClick={() => this.changeDays(7)}>Week</button>
                <button onClick={() => this.changeDays(30)}>Month</button>

                <p>{this.state.type} = {this.state.days}</p>
                {productsHtml}
            </div>

        </div>
    }

}

export default withParams(VendorStatsContainer);