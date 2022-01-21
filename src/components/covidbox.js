import react from "react";
import Covid from "./covid";

const Covidbox = (props) => {
    return (
        <>
            <div className={props.class}>
                <div className='margintop'><p className='text-white fs-6'>{props.tittle1}<span className='fs-4 text-white m-2 fw-bold'>{props.tittle2}</span></p>
                    <p className='fs-3 m-2 fw-bold text-white'>{props.data}{props.india}</p>
                </div>
            </div>
        </>
    )
}  

export default Covidbox;