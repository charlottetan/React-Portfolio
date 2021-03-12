import React, { useState } from 'react'
import './ContactForm.css';


function ContactForm() {
    const [formstatus, setFormstatus] = useState('');
    const [errMsg, setErrMsg] = useState();

    const [name, setName] = useState();
    const [ email, setEmail] = useState();
    const [msg, setMessage]  = useState();

    const formspreeMethod = (ev) => {
        ev.preventDefault();
        console.log("All the Form data:", name, email, msg);

        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    setFormstatus(xhr.status)
                    setErrMsg("");
                   
                } else {
                    setFormstatus(xhr.status)
                    console.log(xhr.status, xhr.statusText)
                    setErrMsg("Something Went Wrong!.Please try Again Later")
                }
        };
        xhr.send(data);
    }

    const validateForm = () => {
        return name.length > 0 && email.length > 0;
    }
    return (
        <div className="contactform">
            <form onSubmit={formspreeMethod} action="https://formspree.io/f/xyybrwkp" method="POST">
                <h3 className="contactform__h3">Contact Me</h3>
                {formstatus !== 200 ? (
                    <div className="contactform__form" >
                        {errMsg?.length === 0 ? '' : <p className="contactform__errMsg">{errMsg}</p>}
                        <input 
                            className="contactform__input" 
                            required type="text" 
                            name="fullname" 
                            placeholder="FullName"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />

                        <input 
                            className="contactform__input" 
                            required type="email" 
                            name="email" 
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea 
                            className="contactform__textarea" 
                            required name="msg-box" 
                            placeholder="Your Message"
                            value={msg}
                            onChange={(e) => setMessage(e.target.value)}
                        >

                        </textarea>
                        <button type="submit" className="contactform__btn" name="sub-btn " value="Send" onClick={validateForm}>Send</button>
                    </div>
                ):(
                    <div>
                        <h4 className="contactform__sucessMsg">Thank you for reaching out. I will get back to you as soon as Possible.</h4>
                    </div>
                )}
                
            </form>
        </div>
    )
}

export default ContactForm
