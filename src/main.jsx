//libs
import { createRoot } from "react-dom/client";
//component
import App from './App';
//context
import {Provider} from './context/ThothContext';
//style
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<Provider><App/></Provider>);