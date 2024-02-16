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
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('entered');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const contactInfo = document.querySelector('.contact-info');
        const mapWrap = document.querySelector('.map-wrap');

        if (contactInfo && mapWrap) {
            observer.observe(contactInfo);
            observer.observe(mapWrap);
        } 

        // Cleanup observer on component unmount
        return () => {
            observer.disconnect();
        };
    }, []);
    return (<section id="contact-me">
        <div className="contact-container">
            <h2>Contact me</h2>
        <div className="contact-detail">
        <div className="contact-info">
            <h3>Address:</h3>
            <br />
            <p>556/32 Niche Pride Tao Poon-Interchange, Pracharat Sai 2 Road, Bang Sue Subdistrict, Bang Sue District, Bangkok 10800, Thailand</p>
            <ContactForm />
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