const Accordion = ({title, subtitle, children}) => {
    return (
        <details>
            <summary>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
            </summary>
            <div className="card_content">
                {children}
            </div>
        </details>
    )
};

export default Accordion;