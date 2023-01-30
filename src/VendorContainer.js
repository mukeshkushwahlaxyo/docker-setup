import { Component } from "react";
import { Link, useParams } from "react-router-dom"
import { Sidebar } from "./Sidebar";
import axios from 'axios';
import { ApiDispatcher } from "./ApiDispatcher";

//TODO copypaste
function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
}

class VendorContainer extends Component {

    //TODO validate if one of imlss,seclock etc

    state = {
        vendor: this.props.params.vendor,
        updates: null
    }

    apidispatcher = new ApiDispatcher();

    componentDidMount() {
        axios.get(this.apidispatcher.dispatch(this.state.vendor)+ `updates`)
            .then(res => {
                const updates = res.data;
                this.setState({ updates });
                console.log(this.state);
            })
    }



    render() {
        const logs = this.state.updates == null ? <div >Loading logs</div> :
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>UUID</th>
                            <th>Source</th>
                            <td>All in feed</td>
                            <th>Active in feed</th>
                            <th>Updated</th>
                            <th>New in feed</th>
                            <th>Deleted from feed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.updates.map((log, index) => <tr>
                            <td>{index + 1}</td>
                            <td>{log.startDate}</td>
                            <td>{log.endDate}</td>
                            <td>{log.uuid}</td>
                            <td>{log.source}</td>
                            <td>{log.allProductsInFeed}</td>
                            <td>{log.activeInFeed}</td>
                            <td>{log.updated}</td>
                            <td>{log.newInFeed}</td>
                            <td>{log.deletedFromFeed}</td>
                        </tr>)

                        }
                    </tbody>
                </table>

            </div>;

        return <div className="page">
            <Sidebar />
            <div>
                <h3>Vendor context {this.state.vendor}</h3>

                <li><Link to={`/vendors/${this.state.vendor}/brands`}>Brands</Link></li>
                <li><Link to={`/vendors/${this.state.vendor}/categories`}>Categories</Link></li>
                <li><Link to={`/vendors/${this.state.vendor}/products`}>All products</Link></li>
                <li><Link to={`/vendors/${this.state.vendor}/products/stats`}>Stats (best sellers)</Link></li>
                <li><Link to={`/vendors/${this.state.vendor}/products/movement/groups`}>Products movement group</Link></li>

                <p>Search products</p>

                {logs}
            </div>
            
        </div>
    }

}

export default withParams(VendorContainer);