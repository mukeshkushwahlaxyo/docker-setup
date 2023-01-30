import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sidebar } from "./Sidebar";
import { ApiDispatcher } from "./ApiDispatcher";

export function ProductMovementGroupStatsContainer() {
    const { vendor } = useParams()

    const apidispatcher = new ApiDispatcher();

    const apiCall = async () => {
        const stats = await axios.get(apidispatcher.dispatch(vendor)+ 'products/movements/groups', {
        })
        console.log(stats.data);
        setStats(stats.data);
    }

    const [stats, setStats] = useState(null);

    useEffect(() => {
        console.log('use effect '+vendor);
        apiCall();
    }, [vendor]);


    const displayStats = (stats) => {
        if (stats == null) {
            return <p>Loading stats</p>
        }

        const statsHtml = Object.keys(stats).sort().map((stat, index) => {
            return <p>
                <b>{stat}</b>: {stats[stat]}
            </p>
        });


        return <div className="page">
            <Sidebar />
            <div>
                <div className="scrollable-div">
                    <h1>Movement stats {vendor}</h1>
                    {statsHtml}
                </div>
            </div>
        </div>

    }

    return displayStats(stats)
}