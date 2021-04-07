import React, { useState } from 'react'
import * as emailjs from 'emailjs-com';

//importing styles
import '../styles/patterns/contact.css'

//Importing notification package
import { toast } from 'react-toastify'

//importing media assets
import hello from '../assets/icons/hello.svg'

const initailState = {
    username:"",
    work:"",
    place:"",
    amount:"",
    category:"",
    duration:"",
    email:"",
    mobileno:"",
}

const Contact = () => {

    const [formData,setFormData] = useState(initailState);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validate(){
        if(formData.username==="" || formData.mobileno==="" || formData.email===""){
            toast.error("please fill the empty fields");
            return false; 
        } 
        return true;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const res=validateEmail(formData.email)
        const val=validate(formData)

        //if email id is invalid
        if(formData.email!==""){
            if(!res) toast.error("Invalid Email Address")
        }


        if(res && val){

            const {username,work,place,category,duration,amount,email,mobileno}=formData;

            let templateParams={
                username,work,place,category,duration,amount,email,mobileno
            }

            emailjs.send(
                'zevocorp_service', 
                'template_2bco5dd', 
                templateParams , 
                'user_pA3AcBwuZrONMUHbSNCIo'
            )
            .then((result) => {
                toast.dark(
                    <div>
                        <p style={{marginBottom:8}}>Thanks for contacting us</p>
                        <p>We will meet you soon</p>
                    </div>
                )
                setFormData(initailState)
            }, (error) => {
                toast.error("Something went wrong")
                setFormData(initailState)
            });
           
        }
    }

    const handleClear = (e) => {
        e.preventDefault();
        setFormData(initailState)
    }

    return (
        <>
        <div className="contact">

            <p className="block-title">Get in touch with us</p>
            <p style={{margin:'1em 0'}}>
                Send us a message, get a quote from us.
            </p>
            <li>
                <img src={hello} alt="hello" />
                <span>Hello folks at ZEVO Corporation!</span>
            </li>

            <form onSubmit={handleSubmit}>
            <div className="input-group">
                My &nbsp; name &nbsp; is 

                <input 
                    type="text" 
                    placeholder="Eg. Esther Howard" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                />. 

                I &nbsp; Work &nbsp; as &nbsp; a

                 <input 
                    type="text" 
                    placeholder="Eg. Cheif Technical Officer" 
                    name="work"  
                    value={formData.work} 
                    onChange={handleChange}  
                />

                 &nbsp; at 

                 <input 
                    type="text" 
                    placeholder="Eg. Antus Data Labs, USA" 
                    name="place"  
                    value={formData.place} 
                    onChange={handleChange} 
                />

               We &nbsp; have &nbsp; a &nbsp; budget &nbsp; of &nbsp; around 

                <input 
                    type="number" 
                    placeholder="Enter your estimated budget" 
                    name="amount"  
                    value={formData.amount} 
                    onChange={handleChange} 
                />

                to &nbsp; complete &nbsp; a

                 <select 
                    name="category"  
                    value={formData.category} 
                    onChange={handleChange}
                 >
                     <option value="" disabled  hidden>
                         Select a project category
                    </option>
                     <option value="UI | UX Designing">
                         UI | UX Designing
                    </option>
                     <option value="Hybrid App Development">
                         Hybrid App Development
                    </option> 
                     <option value="Progressive Web App Development">
                         Progressive Web App Development
                    </option>
                     <option value="Landing Page Development">
                         Landing Page Development
                    </option>
                     <option value="Minimum Viable Product Development">
                         Minimum Viable Product Development
                    </option>
                     <option value="Blockchain Core Development">
                         Blockchain Core Development
                    </option>
                     <option value="Smart Contract Development">
                         Smart Contract Development
                    </option>
                     <option value="Defi / Dapp / NFT Development">
                         Defi / Dapp / NFT Development
                    </option>
                     <option value="Web3 / Ethers Integration">
                         Web3 / Ethers Integration
                    </option>
                     <option value="Dapp Architechting">
                         Dapp Architechting
                    </option>
                </select> 

                 on &nbsp; or &nbsp; around &nbsp; a

                <input 
                    type="text" 
                    placeholder="Eg. 2 months from now" 
                    name="duration"  
                    value={formData.duration} 
                    onChange={handleChange} 
                />

                .&nbsp;You &nbsp; can &nbsp; reach &nbsp; me &nbsp; at

                <input 
                    type="text" 
                    placeholder="Eg. estherhoward@example.com" 
                    name="email"  
                    value={formData.email} 
                    onChange={handleChange} 
                /> 

                or &nbsp; at 
                
                <select>
                    <option value="" disabled selected hidden>91</option>
                </select>

                <input 
                    type="number" 
                    placeholder="Eg. 7789654123" 
                    name="mobileno"  
                    value={formData.mobileno} 
                    onChange={handleChange} 
                />
            </div>
            <div className="block-end">
                <div>
                    <p>Sincerely</p>
                    <li>{formData.username ==="" ? 'Esther Howard' : formData.username }</li>
                    <li>{formData.work ==="" ? 'Cheif Technical Officer' : formData.work}</li>
                    <li>{formData.place ==="" ? 'Antus Data Labs, USA' : formData.place}</li>
                </div>
                <div className="button">
                    <button className="primary" type="submit">Send Message</button>
                    <button className="secondary" onClick={handleClear}>Discard Message</button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default Contact
