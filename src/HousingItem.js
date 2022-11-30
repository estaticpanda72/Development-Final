
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

    

//export default function HousingItem(prop) {

function HousingItem(prop) {
  const dict_index = {
    "Archibald-Bronson": 0,
    "Everett-Poland": 1,
    "Jameson-Mead": 2,
    "Andrews Hall": 3,
    "Metcalf Hall": 4,
    "Miller Hall": 5,
    "Morris Hall": 6,
    "Champlin": 7,
    "Emery": 8,
    "Woolley Hall": 9,
    "New Pembroke No. 3": 10,
    "New Pembroke No. 4": 11
  };
  
  const returnIndex = (house_name) => {
    return dict_index[house_name]
  };

    const {item}  = prop;
    const handleClick = () => {
        //do stuff
        //console.log( 'clicked ${item.name}')
    };
  return (
    <Card className="house"  >
      <Card.Img variant="top" src={item.image} width="100" height="275"/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          Average Square Footage: {item.avg_sq_footage}<br></br>
          Location: {item.location}<br></br>
          Bathroom Type: {item.bathroom}<br></br>
          Year Built: {item.year_built}<br></br>
          {item.description} <br></br>
        </Card.Text>
        <Button className='button' variant="primary" onClick={() => prop.updateCart(returnIndex(item.name))}>Save</Button>
      </Card.Body>
    </Card>
  );
}

export default HousingItem;
