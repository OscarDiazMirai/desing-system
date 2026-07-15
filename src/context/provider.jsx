import { useState, useEffect } from "react";
import DataStylesContext from './contex.js';

const ServiceWorkerDataProvider = ({children}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = (event) => {
            if (!event.data || event.data.origin !== "FROM_CONTENT_SCRIPT") {
                setData(event.data)
            }
        };
        // Get data from source web
        window.addEventListener("message", getData);

        const timer = setTimeout(() => {
            window.postMessage({ accion: "REQUEST_DATA_FROM_EXTENSION" }, "*");
        }, 2000);

        // Clean up event
        return () => {
            window.removeEventListener("message", getData);
            clearTimeout(timer);
        };
    }, []);

    return(
        <DataStylesContext.Provider value={data}>
            {children}
        </DataStylesContext.Provider>
    );
};

export default ServiceWorkerDataProvider;