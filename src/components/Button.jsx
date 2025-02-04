export default function Button({ children, onClick }){
    return <button className="accordion-btn" onClick={onClick}>{children}</button>
}