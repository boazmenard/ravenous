import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

let businesses = [business, business, business, business, business, business];

const searchYelp = (term, location, sortBy) => {
    console.log(`Searching yelp with ${term}, ${location}, ${sortBy}`);
}

function App() {
  return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={searchYelp}/>
        <BusinessList business={businesses} />
      </div>
  );
}

export default App;
