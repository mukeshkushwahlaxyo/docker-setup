import { useParams } from "react-router-dom"
import axios from 'axios';
import { Sidebar } from "./Sidebar";

export function Homepage() {

    return (
        <div className="page">
            <Sidebar/>
            <div>
                A&D Group ERP system
            </div>
        </div>
    )
}