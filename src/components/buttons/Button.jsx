const Button = ({propertyName, colorValue})=>{
    return(
        <button style={{backgroundColor:`var(${propertyName})`}}>
            <span>{propertyName}</span>
            <span>{colorValue}</span>
        </button>
    );
};
export default Button