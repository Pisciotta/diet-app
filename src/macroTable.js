import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function printRow(rows,item,setFnc){
    return (
        <tr key={item.key}>
            <td><Badge bg="secondary">{item.label}</Badge></td>
            <td><Badge bg="secondary">{item.fats}g</Badge></td>
            <td><Badge bg="secondary">{item.carbs}g</Badge></td>
            <td><Badge bg="secondary">{item.proteins}g</Badge></td>
            <td><Badge style={{cursor: 'pointer'}} bg="danger" onClick={() => deleteRow(rows, item.key, setFnc)}>X</Badge></td>
        </tr>
    )
}

function deleteRow(array,key,setFnc){
    setFnc(array.filter((item) => item.key !== key));    
}

function MacroTable(props){
    return (
            <Table striped bordered hover>
              <thead>
                <tr>
                    {props.header.map((item) => <th key={item}>{item}</th>)}
                </tr>
              </thead>
              <tbody>
                {props.rows.map((item) => printRow(props.rows,item, props.setRows))}
              </tbody>
            </Table>
    )
}
export default MacroTable;