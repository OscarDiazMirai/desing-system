const Section = ({sectionType, children})=>{
    return(
        <section className={sectionType}>{children}</section>
    );
};

export default Section