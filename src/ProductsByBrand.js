import { useParams } from "react-router-dom";
import { Products } from "./Products";
import { Sidebar } from "./Sidebar";


export function ProductsByBrand() {
    const { vendor, brand } = useParams()


    return <div className="page">
        <Sidebar />
        <div>
            Products By Brand {vendor} - {brand}
            <Products
                vendor={vendor}
                brand={brand}
            />
        </div>
    </div>

}