import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../src/styles/globally.css";
// import './index.css'
// import Cbc from './Component/Cbc.jsx'
// import Fbc from './Component/Fbc.jsx'
// import Demo from './Component/Demo.jsx'
// import Parent from './props/Parent.jsx'
// import State from './state/State.jsx'
import Inline from './styles/Inline.jsx'
import Comp1 from './styles/Comp1.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Cbc />
    <Fbc />
    <Demo /> */}
    {/* <Parent /> */}
    {/* <State/> */}
    {/* <Inline /> */}
    <Comp1/>

  </StrictMode>,
)

