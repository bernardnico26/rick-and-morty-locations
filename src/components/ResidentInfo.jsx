import axios from "axios"
import { useEffect, useState } from "react"

const ResidentInfo = ({resident}) =>{
    const [dates,setDates]=useState ({})

    useEffect(()=>{

        axios
        .get(resident)
        .then(res =>{
            setDates(res.data)
        })
        .catch(error => console.error(error))
    },[])

    const StatusIcon = (status) => {
        if (status==='Dead'){
            return(
                <i class='bx bxs-skull bx-tada bx-flip-horizontal dead' ></i>
            )
        } else if(status==='Alive'){
            return(
                <i className='bx bxs-heart bx-burst bx-flip-horizontal alive' ></i>
            )
        }else{
            return(
                <i className='bx bx-question-mark bx-flashing unknown' ></i>
            )
        };
    }

    return(
    <section className="residentCard">
        <div className="residentInfo">
            <img src={dates.image} alt="resident_image" />
            <section className="name">
                    <h1>
                        {dates.name}
                    </h1>
            </section>
                <hr className="hrcard"/>
            <section className="residentsDescription">
                    <div>
                        <h2>
                            Origin:
                        </h2>
                        <h3>
                            {dates.origin?.name}
                        </h3>
                    </div>
                    <div>
                        <h2>
                            appearances:
                        </h2>
                        <h3>
                            {dates.episode?.length}
                        </h3>
                    </div>
            </section>
            <div className="status">
                <h2>
                    status:
                </h2>
                <h3>
                {StatusIcon(dates.status)} {dates.status}
                </h3>
            </div>
        </div>
        
        
    </section>
    )
} 

export default ResidentInfo