// Split a CSS variable into its name and colour code
export const splitVariableCss = (variableString)=>{
    if(!variableString) return { propertyName: '', value: '' };
    const[propertyName, value] = variableString.replace(';', '').split(':');
    return { propertyName, value };
};