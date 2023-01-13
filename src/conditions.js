import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Conditions(props){
    return (
            <Table striped bordered hover>
              
              <thead>
                <tr>
                <td colSpan="4">Target total calories [kCal]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" placeholder="2300"  aria-describedby="basic-addon1" 
                    onChange={e => props.setCondCalories(e.target.value)}/>
                    </InputGroup>
                    </td>
                </tr>
              <tr key="c1">
              
                <td>
                    Fats [%]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" max="100" placeholder="30"  aria-describedby="basic-addon1"
                    onChange={e => props.setCondRFats(e.target.value)} />
                    </InputGroup>
                </td>
                <td>
                    Carbs [%]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" max="100" placeholder="30"  aria-describedby="basic-addon1"
                    onChange={e => props.setCondRCarbs(e.target.value)} />
                    </InputGroup>
                </td>
                <td>
                    Proteins [%]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" max="100" placeholder="40"  aria-describedby="basic-addon1"
                    onChange={e => props.setCondRProteins(e.target.value)} />
                    </InputGroup>
                </td>

              </tr>
              <tr key="c2">
              <td>
              Min. fats [g]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" placeholder="0" aria-describedby="basic-addon1" 
                    onChange={e => props.setCondGFats(e.target.value)}/>
                    </InputGroup>
                </td>
                <td>
                Min. Carbs [g]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" placeholder="0" aria-describedby="basic-addon1"
                    onChange={e => props.setCondGCarbs(e.target.value)} />
                    </InputGroup>
                </td>
                <td>
                Min. Proteins [g]
                    <InputGroup className="mb-3">
                    <Form.Control type="number" min="0" placeholder="0"  aria-describedby="basic-addon1"
                    onChange={e => props.setCondGProteins(e.target.value)} />
                    </InputGroup>
                </td>
                
              </tr>
              </thead>
            </Table>
    )
}
export default Conditions;