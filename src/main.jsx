import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = document.getElementById('root');

if(!root){
  console.error('Root element not found in DOM');
}else{
  createRoot(root).render(
    <StrictMode>
    <App />
    </StrictMode>
  );
}
