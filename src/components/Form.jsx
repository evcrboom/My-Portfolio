import React, {useRef, useState} from "react";
import emailjs from 'emailjs-com';

function ContactForm() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8vo6f0d', 'template_3ai7kk5', form.current, 'ZhXOKypQlKAmCQtqj')
        .then((result) => {
            console.log(result.text);
            alert("Form submited");
            clearForm();
        }, (error) => {
            console.log(error.text);
            alert("Error" + error.text);
        });
        function clearForm(){
            setTextFill(()=>{
                return {
                Fname : "",
                email : "",
                subject : "",
                message : ""
                }
            });
        };
    };

    const [textFill, setTextFill] = useState({
        Fname : "",
        email: "",
        subject: "",
        message: ""
    });

    function handleChange(event){
        const {value, name} = event.target;
        setTextFill((prevVal)=>{
            return {
                ...prevVal,
                [name] : value
            }
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <input onChange={handleChange} type="text" name="Fname" placeholder="Name" required value={textFill.Fname} />
        </div>
        <div>
          <input onChange={handleChange} type="email" name="email" placeholder="Email" required value={textFill.email} />
        </div>
        <div>
          <input onChange={handleChange} type="text" name="subject" placeholder="Subject" value={textFill.subject} />
        </div>
        <div>
          <textarea onChange={handleChange} rows="4" type="text" name="message" placeholder="Message" required value={textFill.message} />
        </div>
        <button type="submit">Send</button>
      </form>
    );
  }
  
  export default ContactForm;