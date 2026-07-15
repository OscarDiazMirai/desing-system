import {useState, useEffect } from "react";

// Get list of variables from selector style
const useGetVariables = (cssSelector, cssContent) => {
    const[variablesList, setVariablesList] = useState([]);

    useEffect(() => {
        if (!cssSelector || !cssContent) {
            console.log("Waiting for valid data...", { cssSelector, cssContent });
            return;
        }
        // Create regex with dinamic selector
        const regexSelector = cssSelector + "\\s*\\{([^}]+)\\}";
        // Create complete regex
        const regex = new RegExp(regexSelector);
        // Search for matches
        const match = cssContent.match(regex);
        if (!match) {
            console.log("Selector not found");
            return null;
        }
        // Filtered data from regex array
        const cleanData = match[1];
        // Variables regex
        const regexVariables = /--e-global-[\w-]+\s*:\s*([^;}\n]+)/g
        // Variables filtered
        const variables = cleanData.match(regexVariables);
        // Set variables data
        setVariablesList(variables)

    }, [cssSelector, cssContent]);
    console.log('variablesList', variablesList, variablesList.length)
    return variablesList
};

export default useGetVariables