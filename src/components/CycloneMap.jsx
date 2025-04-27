import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CycloneMap({ imageUrl }) {
    const bounds = [
        [20.0, 87.0],
        [24.5, 92.5],
    ];

    return (
        <div style={{ height: '600px', width: '100%' }}>
            <MapContainer center={[22.5, 89.5]} zoom={7} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <ImageOverlay
                    url={imageUrl}
                    bounds={bounds}
                    opacity={0.5}
                />
            </MapContainer>
        </div>
    );
}

export default CycloneMap;
