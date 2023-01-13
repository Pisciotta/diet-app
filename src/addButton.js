import Button from 'react-bootstrap/Button';

function AddButton(props){
    const row = [{key:props.rows.length+1,
        label:props.label,
        fats:props.fats,
        carbs:props.carbs,
        proteins:props.proteins}];

        
    return <Button onClick={() => props.setRows((prevRows) => ([...prevRows, ...row]))} variant="outline-warning">Add food to table!</Button>
}
export default AddButton;