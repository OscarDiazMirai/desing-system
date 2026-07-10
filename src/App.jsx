import Header from '@/layouts/header/Header.jsx'
import Main from '@/layouts/main/Main.jsx'
import '@/style.css'
import {useGetDataFromServiceWorker} from '@/core/core.js'

const App = ()=>{
  // Initialises communication with the extension and injects the three style sheets
  useGetDataFromServiceWorker(); 

  return(
    <>
    <Header/>
    <Main/>
     <div className="contenedor-kit">
      <button class="elementor-button">Example button</button>
    </div>    
    </>
  )
};
export default App;