import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import CSVReader from "react-csv-reader";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <CSVReader
      onFileLoaded={(data, fileInfo, originalFile) =>
        console.dir(data, fileInfo, originalFile)
      }
    /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
