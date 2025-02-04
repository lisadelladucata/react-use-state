import { useState } from "react";
import Button from "./Button";

export default function Accordion({id, title, description}){
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () =>{
        setIsOpen((current) => !current);
    }

    return(
        <div className="accordion" key={id}>
            <div className={`accordion-title ${isOpen && 'active'} `}>
                <h3>{title}</h3> 
                <Button onClick={toggleAccordion}> {isOpen ? "-" : "+"}</Button>
            </div>
            {isOpen && <div>{description}</div>}
        </div>
    );
}