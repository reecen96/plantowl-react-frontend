import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Plants from './components/Plants';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
export { default as DataCenter } from "./components/DataCenter";
export { default as PlantStatus } from "./components/PlantStatus";


ReactDOM.render(
  <React.StrictMode>
    <Plants />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
