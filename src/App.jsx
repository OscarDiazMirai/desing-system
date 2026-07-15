import { useContext, useEffect } from 'react';
import Header from '@/layouts/header/Header.jsx'
import Main from '@/layouts/main/Main.jsx'
import '@/style.css'
import CreateStyleTag from '@/components/createStyleTag.jsx';
import DataStylesContext from '@/context/contex.js'
import useBodyClass from '@/hooks/useBodyClass.js'
import useGetVariables from '@/hooks/useGetVariables.js'

const App = () => {
  // Use context
  const context = useContext(DataStylesContext);
  const { elementorKit, elementorKitId, engineCSS, styleCSS } = context;

  // Add elementor kid Id class to body
  useBodyClass(elementorKitId);
  // Get list of variables from elementor kit styles
  useGetVariables(`elementor-kit-${elementorKitId}`, elementorKit);


  return (
    <>
      {/* Elementor Kit */}
      <CreateStyleTag nameId={`elementor-kit-${elementorKitId}`} contentCss={elementorKit} />
      {/* Style CSS */}
      <CreateStyleTag nameId={`style-css-${elementorKitId}`} contentCss={styleCSS} />
      {/* Engine CSS */}
      <CreateStyleTag nameId={`engine-css-${elementorKitId}`} contentCss={engineCSS} />
      <Header />
      <Main />
    </>
  )
};
export default App;