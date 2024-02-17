import React, {useEffect} from "react";
import "./Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";
import ContactForm from "./Form";

const Contact = () => {
    const customIcon = new Icon({
        iconUrl: process.env.PUBLIC_URL +"/images/icon/map-icon.png",
        iconSize: [60,60]
    });
    return (<section id="contact-me">
        <div className="contact-container">
            <h2>Contact me</h2>
        <div className="contact-detail">
        <div className="contact-info">
            <div className="header-address">
            <h3>Address:</h3>
            </div>
            <br />
            <div className="address-detail">
            <p>556/32 Niche Pride Tao Poon-Interchange, Pracharat Sai 2 Road, Bang Sue Subdistrict, Bang Sue District, Bangkok 10800, Thailand</p>
            <ContactForm />
            </div>
        </div>
        <div className='map-wrap'>
        <MapContainer center={[13.805945107535331, 100.53208896781283]} zoom={16} style={{ height: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[13.805945107535331, 100.53208896781283] } icon={customIcon} >
                    <Popup>
                        Nattapat lives here. <br /> Now having some tea:)
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        </div>
        </div>
    </section>)
};

export default Contact;