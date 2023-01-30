import { Link, useParams } from "react-router-dom"
import axios from 'axios';

export function Sidebar() {

    return (
        <div>
            <nav className="sidebar">
            Context

                <p><Link to="/vendors/imlss">Imlss</Link></p>
                <p><Link to="/vendors/seclock">Seclock</Link></p>
                <p><Link to="/vendors/tnd">TND</Link></p>
                <p>-----</p>
                <p><Link to="/vendors/deltana">Deltana</Link></p>
                <p><Link to="/vendors/richelieu">Richelieu</Link></p>
                <p>-----</p>
                <p>OrderMaster</p>
                <p>Links</p>
            </nav>
        </div>
    )
}