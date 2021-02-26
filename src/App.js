import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'Alamgir', 'Salman','Shuvo', 'Tahsan'];
  const products = [{name:'Photography', price: '$9.99'}, {name: 'All Apps', price: '$52.99'}, {name: 'Acrobat Pro', price:'$14.99'}, {name:'Photoshop', price: '$20.99'}, {name:'Premiere Pro', price: '$20.99'}, {name:'Premiere Rush', price: '$9.99'}];
  const productNames = products.map(product => product);
  //console.log(productNames);
  const nayokNames = nayoks.map(nayok => nayok);
  //console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person.</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        {/* <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        <Product name={products[3].name} price={products[3].price}></Product>
        <Product name={products[4].name} price={products[4].price}></Product>
        <Product name={products[5].name} price={products[5].price}></Product> */}
        <Person name={nayoks[0]} nayika="Moushumi"></Person>
        <Person name="Jashim" nayika="Shabana"></Person>
        <Person name="Manna" nayika="Shabnur"></Person>
      </header>
    </div>
  );
}

function Counter(){

  const[count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    color: 'black',
    width: '400px',
    padding: '5px',
    margin: '5px',
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <button style={{border: 'none', borderRadius: '30px', width: '80px', height: '30px', backgroundColor: '#1E90FF', color: 'white', fontFamily: 'Georgia, serif'}}>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border:'2px solid red',
    width:'400px', 
    margin:'10px',
    padding:'5px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Heroine is {props.nayika}</h3>
    </div>
  )
}

export default App;
