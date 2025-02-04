import { useState } from "react";
import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordionList() {
    
    const [activeAccordion, setActiveAccordion] = useState(null)
    const handleActive = (id) =>{
        setActiveAccordion((currentId) =>{
            if(currentId === id){
                return null
            } else{
                return id
            }
        })
    }

    return (
    <div className="accordion-list">
        {languages.map((language) =>{
            return <Accordion 
            key={language.id} 
            title={language.title} 
            description={language.description} 
            isOpen={language.id === activeAccordion}
            onClickAccordion ={() => handleActive(language.id)}
            />
        })} 
    </div>
    );
}