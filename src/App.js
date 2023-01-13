import {useState} from 'react'
import './App.css';
import MacroTable from './macroTable';
import AddButton from './addButton';
import CalcButton from './calcButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MacroInput from './macroInput';
import Conditions from './conditions';
import ResultTable from './resultTable';
import {CSVLink} from 'react-csv';
import Uploader from './uploader';
import Alert from 'react-bootstrap/Alert';


function App() {
  const header=["Label","Fats","Carbs","Proteins",""];
  const [rows, setRows] = useState([]);
  const [label, setLabel] = useState("?");
  const [fats, setFats] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [proteins, setProteins] = useState(0);
  const [condGFats, setCondGFats] = useState(0);
  const [condGCarbs, setCondGCarbs] = useState(0);
  const [condGProteins, setCondGProteins] = useState(0);
  const [condRFats, setCondRFats] = useState(30);
  const [condRCarbs, setCondRCarbs] = useState(30);
  const [condRProteins, setCondRProteins] = useState(40);
  const [condCalories, setCondCalories] = useState(2300);
  const [quantities, setQuantities] = useState([]);
  



  return (
    <div className="App">
      <Container>
        <Row><h2>-Food's table-</h2></Row>
        <Row><MacroTable header={header} rows={rows} setRows={setRows}/></Row>
        <Row>
        <span>
          <CSVLink
          data={rows}
          filename={"food-table.csv"}
          className="btn btn-light"
          target="_blank">
          Export Table
          </CSVLink>
          or
          <Uploader setRows={setRows}/>
          
          </span>
        </Row>
        <Row>
          <MacroInput setLabel={setLabel}
          setFats={setFats}
          setCarbs={setCarbs}
          setProteins={setProteins}
          />
        </Row>
        
      <Row>
        
          
          
          <AddButton rows={rows}
          setRows={setRows}
          label={label}
          fats={fats}
          carbs={carbs}
          proteins={proteins}
          
          />
      </Row>
      <Row><h2>-Conditions-</h2></Row>
      <Row>
        <Conditions
        setCondCalories={setCondCalories}
        setCondGFats={setCondGFats}
        setCondGCarbs={setCondGCarbs}
        setCondGProteins={setCondGProteins}
        setCondRFats={setCondRFats}
        setCondRCarbs={setCondRCarbs}
        setCondRProteins={setCondRProteins}
        />
      </Row>

      {parseInt(condRFats)+parseInt(condRCarbs)+parseInt(condRProteins) != 100 ? <Alert variant='warning'>Percentages of fats, carbs and proteins MUST sum up to 100%!</Alert> : 
        <Row>
        <CalcButton rows={rows}
        condCalories={condCalories}
        condGFats={condGFats}
        condGCarbs={condGCarbs}
        condGProteins={condGProteins}
        condRFats={condRFats}
        condRCarbs={condRCarbs}
        condRProteins={condRProteins}
        setQuantities={setQuantities}
        />
      </Row>
      }
      
      
      {
      Object.keys(quantities).length == 1 && quantities[0] == null ?
        <Alert variant='danger'><b>You got an error!</b> Please check your inputs are correct and click on "Calculate" again.</Alert>: 
          Object.keys(quantities).length > 0 ?
            <><Row><h2>-Results-</h2></Row><Row><ResultTable quantities={quantities} /></Row></>:
              null
      }
      
      </Container>
    </div>
  );
  
}

export default App;
