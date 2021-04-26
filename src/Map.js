import axios from 'axios';
import React from 'react';
import L from 'leaflet';
import iss from './image/iss.png';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './App.css';

class Map extends React.Component{

    state = {
        latitude : '',
        longitude: '',
        altitude: '',
        velocity: ''
    };

    componentDidMount(){
        this.fetchISS();
        setInterval(this.fetchISS, 3000);
    }

    fetchISS = () => {
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
            .then((iss) => {
                const { latitude } = iss.data;
                this.setState({ latitude });

                const { longitude } = iss.data;
                this.setState({ longitude });

                const { altitude } = iss.data;
                this.setState({ altitude });

                const { velocity } = iss.data;
                this.setState({ velocity });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        const { latitude } = this.state;
        const { longitude } = this.state;
        const { altitude } = this.state;
        const { velocity } = this.state;
        const position = [latitude, longitude];

        const pointerIcon = new L.Icon({
            iconUrl: iss,
            iconSize: [50, 32],
            iconAnchor: [25, 16]
        });

        return (
            <nav className="map-nav">
                <h1 className="iss-h1">Hol van a Nemzetközi Űrállomás?</h1>
                <div className="iss-p-div">
                    <p className="iss-p">Szélességi fok: {Number(latitude).toFixed(3)}°<br />
                Hosszúsági fok: {Number(longitude).toFixed(3)}°<br />
                Magasság: {Number(altitude).toFixed(3)} km<br />
                Sebesség: {Number(velocity).toFixed(3)} km/h</p>
                </div>
              
                
                    <MapContainer center={[0, 0]} zoom={2} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker key={this.state.id} position={position} icon={pointerIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                        </Marker>
                    </MapContainer>
                
                
            </nav>
        )
    }
}

export default Map;