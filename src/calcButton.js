import Button from 'react-bootstrap/Button'


async function  compute(props){
    var jsonData = {
        "products": props.rows,
        "calories": parseFloat(props.condCalories),
        "g_fats": parseFloat(props.condGFats),
        "g_carbs": parseFloat(props.condGCarbs),
        "g_proteins": parseFloat(props.condGProteins),
        "r_fats": parseFloat(props.condRFats/100),
        "r_carbs": parseFloat(props.condRCarbs/100),
        "r_proteins":  parseFloat(props.condRProteins/100)
    }
    const options = { 
        method: 'post',
        mode: 'cors',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(jsonData)
      } 

    const response = await fetch('https://pisciottablog-tools.uc.r.appspot.com',options).then(response => {
            if (!response.ok) {
                throw new Error('Data coud not be fetched!')
            } else {
                return response.json()
            }
        }).then(function(parsedData) {
            props.setQuantities(parsedData);
        });
/*
        const test = await fetch('https://pisciottablog-tools.uc.r.appspot.com/ip').then(response => {
            if (!response.ok) {
                throw new Error('Data coud not be fetched!')
            } else {
                return console.log(response.json());
            }
        });
*/
}

function CalcButton(props){
    
    return <Button variant="outline-success" onClick={() => compute(props)} >Calculate</Button>
}
export default CalcButton;