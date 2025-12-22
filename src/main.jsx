//libs
import { createRoot } from "react-dom/client";
//component
import App from './App';
//style
import './scss/main.scss';
//dom elements
const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App/>);