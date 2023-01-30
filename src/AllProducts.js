import { useParams } from "react-router-dom";
import { Products } from "./Products";
import { Sidebar } from "./Sidebar";


export function AllProducts() {
    const { vendor, brand } = useParams()


    return <div className="page">
        <Sidebar />
        <div>
            All products vendor {vendor}
            <Products
                vendor={vendor}
            />
        </div>
    </div>

}