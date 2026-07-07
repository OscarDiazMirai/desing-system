// archivo: core.js
import { useEffect } from 'react';

// 
export const useCreateStylesSheetsCSS = () => {
  useEffect(() => {
    const getData = (event) => {
      if (event.data && event.data.origin === "FROM_CONTENT_SCRIPT") {
        console.log("¡SUCCESSFULL!", event.data);

        const { elementorKit, styleCSS, engineCSS } = event.data;

        // We create and inject the stylesheet for Elementor Kit
        createCSSLinkTag("elementor-kit", elementorKit);

        //  We create and inject the stylesheet for Style CSS
        createCSSLinkTag("style-css", styleCSS);

        //  We create and inject the stylesheet for Engine CSS
        createCSSLinkTag("engine-css", engineCSS);

        // Add to body class with elementor-kit-ID
        addElementorKitId(event.data.elementorKitId);
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
};

// Helper function for injecting plain text as an actual stylesheet into the browser
const createCSSLinkTag = (id, contenidoCSS) => {
  if (!contenidoCSS) return;

  let elementoStyle = document.getElementById(id);

  // If the tag is not present in the HEAD section, we create it
  if (!elementoStyle) {
    elementoStyle = document.createElement("style");
    elementoStyle.id = id;
    document.head.appendChild(elementoStyle);
  }

  // We apply the CSS in plain text format received from the extension
  elementoStyle.textContent = contenidoCSS;
};


// Add elementor-kit-ID class to body to use any vars or classes
const addElementorKitId = (id) => {
  if (!document.body) return;
  document.body.classList.add(`elementor-kit-${id}`)
};