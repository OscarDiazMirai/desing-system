import { useEffect } from 'react';
// import DataStylesContext from '@/context/contex.js';


// const{elementorKit, elementorKitId, engineCSS, styleCSS} = useContext(DataStylesContext);


// Creates the <style> tags based on the information from the service worker
export const useGetDataFromServiceWorker = () => {
  useEffect(() => {
    const getData = (event) => {
      if (event.data && event.data.origin === "FROM_CONTENT_SCRIPT") {
        console.log("¡SUCCESSFULL!", event.data);

        // Destructuring data
        const { elementorKit, styleCSS, engineCSS, elementorKitId } = event.data;

        // We create and inject the stylesheet for Elementor Kit
        createCssStyleTag("elementor-kit", elementorKit);

        //  We create and inject the stylesheet for Style CSS
        createCssStyleTag("style-css", styleCSS);

        //  We create and inject the stylesheet for Engine CSS
        createCssStyleTag("engine-css", engineCSS);

        // Add to body class with elementor-kit-ID
        addElementorKitIdClass(elementorKitId);

        // Elementor kit
        getListOfVariables(`elementor-kit-${elementorKitId}`, elementorKit)
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
const createCssStyleTag = (id, contentCss) => {
  if (!contentCss) return;
  let elementStyle = document.getElementById(id);

  // If the tag is not present in the HEAD section, we create it
  if (!elementStyle) {
    elementStyle = document.createElement("style");
    elementStyle.id = id;
    document.head.appendChild(elementStyle);

    /* // Get DOM elements to insert <style> CSS
    const contentElementorKit = document.querySelector('.content_elementor_kit');
    const contentStyleCss = document.querySelector('.content_style_css');
    const contentEngineCss = document.querySelector('.content_engine_css');

    switch (id) {
      case 'elementor-kit':
        contentElementorKit.prepend(elementStyle)
        break;
      case 'style-css':
        contentStyleCss.prepend(elementStyle)
        break;
      case 'engine-css':
        contentEngineCss.prepend(elementStyle)
        break;

      default:
        document.head.appendChild(elementStyle);
        break;
    }
    console.log('contentElementorKit', contentElementorKit, id)
    console.log('createCssStyleTag') */
  }

  // We apply the CSS in plain text format received from the extension
  elementStyle.textContent = contentCss;
};


// Add elementor-kit-ID class to use its variables and classes
const addElementorKitIdClass = (id) => {
  if (!document.body) return;
  // document.body.classList.add(`elementor-kit-${id}`)
  // const main = document.querySelector('main');
  const contentElementorKit = document.querySelector('.content_elementor_kit > .content');
  contentElementorKit.classList.add(`elementor-kit-${id}`)
};

const getListOfVariables = (selector, source) => {
  // Create regex with dinamic selector
  const regexSelector = selector + "\\s*\\{([^}]+)\\}";
  // Create complete regex
  const regex = new RegExp(regexSelector);
  // Search for matches
  const match = source.match(regex);
  if (!match) {
    console.log("Selector not found");
    return null;
  }
  // Filtered data from regex array
  const cleanData = match[1];
  console.log(cleanData)
  // Variables regex
  const regexVariables = /--e-global-[\w-]+\s*:\s*([^;}\n]+)/g
  // Variables filtered
  const variables = cleanData.match(regexVariables)
  console.log(variables, variables.length)

};