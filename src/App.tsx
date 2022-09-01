import { createElement } from "react";
import {BrowserRouter} from 'react-dom'
import { JsxElement } from "typescript";
import Header from "./Components/header";
import "./styles.css";

export default function App():JsxElement {
  return (<div className="App">
           <Header name="hadeel" age={33}  />
           <BrowserRouter>
           </BrowserRouter>
       </div>)
    
    }
    
    





