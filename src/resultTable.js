import Table from 'react-bootstrap/Table';





function ResultTable(props){

        return (<>
                <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Food Label</th>
                        <th>Quantity (g)</th>
                    </tr>
                </thead>
                <tbody>
                        {Object.entries(props.quantities).map(([key, value]) => <tr key={key}><td>{key}</td><td>{value*100}</td></tr>)}
                </tbody>
                </Table>
                </>
        );
    
    
}
export default ResultTable;