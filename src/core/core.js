import { useEffect } from 'react';

export const elementorKit = () => {
  useEffect(() => {
    // console.log('[React] Ready component...');

    const getData = (event) => {
      // console.log("[React] Receiving data...:", event.data);
      // We check that the message comes from our extension and not from another script
      if (event.data && event.data.origin === "FROM_CONTENT_SCRIPT") {
        console.log("¡ÉXITO EN REACT!", event.data);
      }
    };
    // Run listener
    window.addEventListener("message", getData);

    // We introduced a long delay (2 seconds) just to check whether it was an asynchronous loading issue
    const timer = setTimeout(() => {
      // console.log('[React] Enviando petición REQUEST_DATA_FROM_EXTENSION...');
      window.postMessage({ accion: "REQUEST_DATA_FROM_EXTENSION" }, "*");
    }, 2000);

    // Clear listeners and timers
    return () => {
      window.removeEventListener("message", getData);
      clearTimeout(timer);
    };
  }, []);

};
