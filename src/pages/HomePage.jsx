import React, { useState, useEffect } from 'react';
import { getCyclones, filterCyclones } from '../api/api';
import CycloneTable from '../components/CycloneTable';
import CycloneMap from '../components/CycloneMap';

function HomePage() {
    const [cyclones, setCyclones] = useState([]);
    const [threshold, setThreshold] = useState('');
    const [mapUrl, setMapUrl] = useState("https://your-map-image-url"); // replace if needed

    useEffect(() => {
        fetchAllCyclones();
    }, []);

    const fetchAllCyclones = async () => {
        const response = await getCyclones();
        setCyclones(response.data);
    };

    const handleFilter = async () => {
        if (!threshold) {
            alert("Please enter a threshold value");
            return;
        }
        const response = await filterCyclones(Number(threshold));
        setCyclones(response.data);
    };

    return (
        <div>
            <h2>Home - Cyclone Classifier</h2>
            <div>
                <input 
                    type="number" 
                    placeholder="Threshold for Affected People" 
                    value={threshold}
                    onChange={(e) => setThreshold(e.target.value)}
                />
                <button onClick={handleFilter}>Filter Cyclones</button>
                <button onClick={fetchAllCyclones}>Reset</button>
            </div>
            <CycloneTable data={cyclones} />
            <h3>Cyclone Impact Map</h3>
            <CycloneMap imageUrl={mapUrl} />
        </div>
    );
}

export default HomePage;
