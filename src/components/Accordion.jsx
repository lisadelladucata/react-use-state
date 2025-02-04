import { useState } from "react";
import Button from "./Button";

export default function Accordion({id, title, description, isOpen, onClickAccordion}){

    return(
        <div className="accordion" key={id}>
            <div className={`accordion-title ${isOpen && 'active'} `}>
                <h3>{title}</h3> 
                <Button onClick={onClickAccordion}> {isOpen ? "-" : "+"}</Button>
            </div>
            {isOpen && <div>{description}</div>}
        </div>
    );
}