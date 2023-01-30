import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sidebar } from "./Sidebar";
import { ApiDispatcher } from "./ApiDispatcher";

export function Brand() {
    const { vendor } = useParams()

    const apidispatcher = new ApiDispatcher();

    const apiCall = async () => {
        const brands = await axios.get(apidispatcher.dispatch(vendor)+ 'brands', {
        })
        console.log(brands.data);
        setBrands(brands.data);
    }

    const [brands, setBrands] = useState(null);

    useEffect(() => {
        console.log('use effect '+vendor);
        apiCall();
    }, [vendor]);


    const displayBrands = (brands) => {
        if (brands == null) {
            return <p>Loading brands</p>
        }

        const brandsHtml = brands.map((brand, idex) => {
            return <p>
                {/* <Link to={`/products?brand=${brand}`}>{brand}</Link> */}

                <Link to={`/vendors/${vendor}/brand/${brand}/products`}>{brand}</Link>
            </p>
        });


        return <div className="page">
            <Sidebar />
            <div>
                <div className="scrollable-div">
                    <h1>Brands {vendor}</h1>
                    {brandsHtml}
                </div>
            </div>
        </div>

    }

    return displayBrands(brands)
}