import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


function MacroInput(props) {
  return (
          <>
            <>Add new product by giving grams of fats, carbs and proteins for each 100 g.</>
            <InputGroup className="mb-3">
            <Form.Control
                placeholder="Food Label"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => props.setLabel(e.target.value)}
                />
                <Form.Control
                type="number"
                min="0"
                placeholder="Fats (g)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => props.setFats(e.target.value)}
                />
                <Form.Control
                type="number"
                min="0"
                placeholder="Carbs (g)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => props.setCarbs(e.target.value)}
                />
                <Form.Control
                type="number"
                min="0"
                placeholder="Proteins (g)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={e => props.setProteins(e.target.value)}
                />
            </InputGroup>
          </>
  );
}

export default MacroInput;