import "./App.css";
import { useRef  } from "react";
import Papa from "papaparse";
import Button from 'react-bootstrap/Button';

function Uploader(props) {
const btnRef = useRef(null);
const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        props.setRows(results.data);
      },
    });
};

  return (
    <>
      <Button variant="btn btn-light" onClick={() => btnRef.current.click()}>
        Import Table
      </Button>
      <input 
        ref={btnRef}
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        variant="btn btn-light"
        style={{display:"none"}} />


    </>
  );
}

export default Uploader;