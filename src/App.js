import './App.css';
import { useEffect, useState } from "react";
import housingData from "./assets/housing.json";
import HousingItem from "./HousingItem";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartItem from  "./CartItem.js"

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


function App() {

  const housingInfo = [];
  housingData.forEach((house) => {
    housingInfo.push({ 
      "name": house.name, 
      "description": house.description,
      "avg_sq_footage": house.avg_sq_footage,
      "location": house.location,
      "bathroom": house.bathroom,
      "year_built": house.year_built,
      "image": house.image
    })
  });
  housingInfo.sort((a,b) => (b.avg_sq_footage - a.avg_sq_footage))


  const [type, setType] = useState("All");

  const [communal, setCommunal] = useState(true);
  const [private_, setPrivate] = useState(true);
  const [semiprivate, setSemiPrivate] = useState(true);

  const [south, setSouth] = useState(true);
  const [north, setNorth] = useState(true);

  const [cart, setCart] = useState({items: {}, total: 0}); 



  const [sortHousing, setSortHousing] = useState(housingInfo);
  const [sortBy, setSortBy] = useState('avg_sq_footage');

  const bathroomCheck = {
    "communal": [communal, setCommunal],
    "semi-private": [semiprivate, setSemiPrivate],
    "private": [private_, setPrivate],
  };
  const locationCheck = {
    "north": [north, setNorth],
    "south": [south, setSouth],
  };

  const runSorter = (event, newValue) => {
    setSortBy(newValue);
    let sorting = [... sortHousing];
    let type = newValue;
    if (type == 'year_built' || type =='avg_sq_footage'){
      sorting.sort(function(a, b) {return a[type] - b[type];});
    }
    else {
      sorting.sort((a,b) => a.Name.localeCompare(b.Name));
    }
    setSortHousing(sorting)
  };

  function reset() {
    Object.keys(bathroomCheck).map(category => bathroomCheck[category][1](true));
    Object.keys(locationCheck).map(category => locationCheck[category][1](true));
    runSorter(null, "avg_sq_footage");
  }

  function getProp(prop, name) {
    let val = null;
    for (const house of housingInfo) {
      if (house.name == name) {
        val = house[prop];
      }
    }
    return val;
  }
  const updateCart = (index) => {
    let item = housingData[index]
    let name = item.name; 

    let updatedCart = cart.items; 
    
    if (updatedCart[name]) {
      updatedCart[name] += 1
    } 
    else {
      updatedCart[name] = 1
    }
    setCart({items: updatedCart, total: cart.total + item.avg_sq_footage})
  }
  function addItem(name) {
    cart.items[name] += 1
    let itemFootage = null;
    for (const house of housingInfo) {
      if (house.name == name) {
        itemFootage = house.avg_sq_footage;
        break;
      }
    }
    setCart({items: cart.items, total: cart.total + itemFootage})
  }

  function removeItem(name) {
    if (cart.items[name] > 0) {
      cart.items[name] -= 1
      let itemFootage = null
      for (const house of housingInfo) {
        if (house.name == name) {
          itemFootage = house.avg_sq_footage;
          break;
        }
      }
      setCart({items: cart.items, total: cart.total - itemFootage})
    }

    if (cart.items[name] == 0){
        delete cart.items[name]
    }
  }

  function clearCart() {
    setCart({items: {}, total: 0});
  }




    return (

      <div id = "main">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Nav>
            <Nav.Item><Nav.Link eventKey="All">Brown U Freshman Dorms</Nav.Link></Nav.Item>
          </Nav>
        </Navbar>

        <div class="filter-sort">
          <div> 
            <h4>Sort By:</h4>
          </div>
          <div>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue= 'avg_sq_footage'
                name="radio-buttons-group"
                onChange={runSorter}
                value={sortBy}>
                <FormControlLabel value='year_built' control={<Radio/>} label="Year Built" />
                <FormControlLabel value='avg_sq_footage' control={<Radio/>} label="Avg Square Ft" />
              </RadioGroup>
            </FormControl>
          </div>

          <div class="filter_text">
            <h4>Bathroom Filter:</h4>
          </div>
          <div>
            <FormGroup>
              {Object.keys(bathroomCheck).map(bathroom =>
                <FormControlLabel onChange={(event, value) => bathroomCheck[bathroom][1](value)}
                  control={<Checkbox checked={bathroomCheck[bathroom][0]} />} label={bathroom} />)}
            </FormGroup>
          </div>
          <div class="filter_text">
            <h4>Location Filter:</h4>
          </div>
          <div class = "filter">
            <FormGroup>
              {Object.keys(locationCheck).map(location =>
                <FormControlLabel onChange={(event, value) => locationCheck[location][1](value)}
                  control={<Checkbox checked={locationCheck[location][0]} />} label={location} />)}
            </FormGroup>
          </div>
          <button class = "clear_button filter_text" onClick={() => reset()}>Reset All Filters</button>
        </div>
      <div id= "main-field"> 

      <div class="container">
          {sortHousing.map(item => (bathroomCheck[item.bathroom][0] && locationCheck[item.location][0]) ?
            <HousingItem item={item} updateCart={updateCart} ></HousingItem> : <></>
          )}
        </div>

        <div id="cart-label" >
            <h2>Saved Items</h2>
            <div class="cart_text">
              <h3>Total Footage: {cart.total}</h3>
            </div>
            <div class = "button_div">
              <button class = "clear_button" onClick={() => clearCart()}>Clear Cart</button>
              <button class = "button">Checkout</button>
            </div>
        </div>
        <div class="cart">

            {Object.keys(cart.items).map(name => <CartItem name={name} count={cart.items[name]} img={getProp("image", name)} 
            avg_sq_footage={getProp("avg_sq_footage", name)} addItem={addItem} removeItem={removeItem}> </CartItem>)}
        </div>

      </div>    
        


      </div>


    );
  }


  export default App;

