import languages from "../data/languages";
import Accordion from "./Accordion";

export default function AccordionList() {
    return (
    <div className="accordion-list">
        {languages.map((language) =>{
            return <Accordion key={language.id} title={language.title} description={language.description}/>
        })} 
    </div>
    );
}