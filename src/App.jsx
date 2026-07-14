import { useContext } from 'react';
import Header from '@/layouts/header/Header.jsx'
import Main from '@/layouts/main/Main.jsx'
import '@/style.css'
// import {useGetDataFromServiceWorker} from '@/core/core.js'
import CreateStyleTag from '@/components/createStyleTag.jsx';
import DataStylesContext from '@/context/contex.js'

const App = ()=>{
  const context = useContext(DataStylesContext);
  const{elementorKit, elementorKitId, engineCSS, styleCSS} = context;
    console.log('context from App', elementorKitId)
    
  // Initialises communication with the extension and injects the three style sheets
  // useGetDataFromServiceWorker(); 

  return(
    <>
      {/* Elementor Kit */}
    <CreateStyleTag nameId={`elementor-kit-${elementorKitId}`} contentCss={elementorKit}/>
      {/* Style CSS */}
    <CreateStyleTag nameId={`style-css-${elementorKitId}`} contentCss={styleCSS}/>
      {/* Engine CSS */}
    <CreateStyleTag nameId={`engine-css-${elementorKitId}`} contentCss={engineCSS}/>
    <Header/>
    <Main/>
    </>    
  )
};
export default App;