import React,{ useEffect } from 'react'

//Importing animation
import Aos from 'aos'
import 'aos/dist/aos.css'

//importing styles
import '../styles/patterns/serviceCard.css'

const ServiceCard = ({ name, src, type }) => {

    useEffect(() => {
        Aos.init({duration:1000})
    },[])

    return (
        <div className="service-card" style={{
            flexDirection:type==="inverse"?'column-reverse':'column'
        }}
         data-aos="fade-up-right"
        >
            <div>
                <p className="card-title">{name}</p>
                <p>Lorem ipsum dolor sit amet elit consectetur adipiscing 
                    elit. Tristique id facilisi metus rhoncus, nunc est.
                </p>
            </div>
            <div className="image">
                <img  src={src} alt="dev" />
            </div>
        </div>
    )
}

export default ServiceCard
