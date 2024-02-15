import React, {useState, useEffect} from "react";
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import Typical from 'react-typical'
import "./Header.css"; 

const Header = ()=> {
    const [name, setName] = useState(window.innerWidth <= 768 ? 'Boom' : 'Nattapat Pattarapremcharoen');
    useEffect(() => {
        const handleResize = () => {
          // ตั้งค่า state ให้เปลี่ยนชื่อตามขนาดหน้าจอ
          if (window.innerWidth <= 768) {
            setName('Boom');
          } else {
            setName('Nattapat Pattarapremcharoen');
          }
        };
    
        // ตรวจจับ event การเปลี่ยนแปลงขนาดของ window
        window.addEventListener('resize', handleResize);
    
        // Call handler ทันทีเพื่อ update state ตอน component mount
        handleResize();
    
        // Cleanup function สำหรับเมื่อ component จะ unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    return <div className="background-Header">
        <LaptopChromebookIcon style={{ fontSize: 200 }} />
        <Typical 
        className="name-header"
        steps={[name, 1500]} 
        wrapper="h2" />
        <Typical
        className="p-text"
        steps={['I am FRONT-END DEVELOPER', 2000, 'I am BACK-END DEVELOPER', 2000, 'I am FULL-STACK DEVELOPER', 2000, 'I am CIVIL-ENGINEER', 2000]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
};

export default Header;