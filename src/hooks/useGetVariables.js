import { useState, useEffect } from "react";

// Get list of variables from selector style
const useGetVariables = (cssSelector, cssContent) => {
    // Define initial state
    const [payload, setPayload] = useState({
        allVariables: [],
        coloursVariables: [],
    });

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
        const regexVariables = /--e-global-[\w-]+\s*:\s*([^;}\n]+;)/g
        // Variables filtered
        const variables = cleanData.match(regexVariables);

        // Control empty variables
        if (!variables) {
            console.log("No variables found in selector");
            setPayload({ allVariables: [], coloursVariables: [] });
            return;
        }

        // Set variables data
        setPayload({
            allVariables: variables,
            coloursVariables: filterColoursVariables(variables) //Filter colours variables
        });


    }, [cssSelector, cssContent]);
    // console.log('dataPayload', payload)
    return payload
};

export default useGetVariables

// Filter colour variables
function filterColoursVariables(arrVariablesList) {
    // Colour regex
    const colourRegex = /^--e-global-color-/;
    // Filter data
    const filterColourVariables = arrVariablesList.filter(variable => colourRegex.test(variable));
    return filterColourVariables;
};