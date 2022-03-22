import * as React from "react";
import "./App.css";
import CSVReader from "react-csv-reader";
// import Button from "@mui/material/Button";
// import TheContainer from "./components/TheContainer";

const handleForce = (data, fileInfo) => console.log(data, fileInfo);

const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

function App() {
  return (
    // first create the table component and import it into app.js
    // then be able to use component
    // add logic in app.js
    // how do i get csv data to the backend

    // DO BELOW FIRST

    // be able to read csv in react front end DONE
    // store csv file in state? how? DONE
    // log csv data into console DONE

    // fetch api from backend
    // push data to backend...how? axios?
    //
    <div className="App">
      <header className="App-header">
        <h1>CSV Converter</h1>

        <h2>Convert Data here</h2>
      </header>
      {/* <TheContainer /> */}
      <div className="outerContainer">
        <div className="innerContainer">
          <CSVReader
            cssClass="react-csv-input"
            label="Select CSV "
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
          />
        </div>
        {/* <div className="buttons-bar">
          <Button variant="contained">Upload</Button>
          <Button variant="contained">Download</Button>
          <Button variant="contained">Copy to Clipboard</Button>
        </div> */}

        <div className="innerContainer">
          <p>JSON Output</p>
        </div>
      </div>
    </div>
  );
}

export default App;
