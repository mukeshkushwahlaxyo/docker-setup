import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
// import { Link,  Router, Routes } from 'react-router-dom';
// import { Route, Switch } from 'react-router-dom'
import { Routes, Route, Router, Link } from 'react-router-dom'
import { Book } from './Book';
import { Book2 } from './Book2';
import { Brand } from './Brand';
import { ProductsByBrand } from './ProductsByBrand';
import Product from './Product';
import VendorContainer from './VendorContainer';
import { Homepage } from './Homepage';
import { AllProducts } from './AllProducts';
import VendorStatsContainer from './VendorStatsContainer';
import { ProductMovementGroupStatsContainer } from './ProductMovementGroupStatsContainer';

const App = () => {

  // const [groups, setGroups] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch('api/groups')
  //     .then(response => response.json())
  //     .then(data => {
  //       setGroups(data);
  //       setLoading(false);
  //     })
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (







    <div className="App">


    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/vendors/:vendor" element={<VendorContainer />} />
      <Route path="/vendors/:vendor/brands" element={<Brand />} />
      <Route path="/vendors/:vendor/brand/:brand/products" element={<ProductsByBrand />} />
      <Route path="/vendors/:vendor/products" element={<AllProducts />} />
      <Route path="/vendors/:vendor/products/:productId" element={<Product />} />
      <Route path="/vendors/:vendor/products/stats" element={<VendorStatsContainer />} />
      <Route path="/vendors/:vendor/products/movement/groups" element={<ProductMovementGroupStatsContainer />} />

    </Routes>

    {/* <Homepage/> */}


<hr></hr>


      {/* <header className="App-header">
        <div className="App-intro">
          <h2>JUG List</h2>
          

        </div>
      </header> */}

{/* 
      <Routes>
      <Route path="/" element={<Book />} />
      <Route path="/books" element={<Book />} />
      <Route path="/books2" element={<Book2 />} />

      <Route path="/brands" element={<Brand />} />



      <Route path="/brands2/:id" element={<Brand />} />



      <Route path="/:vendor/brands/:brand/products" element={<ProductsByBrand />} />

      <Route path="/:vendor/products/:productId" element={<Product />} />





      

    </Routes> */}



    </div>
  );
}

export default App;

//https://blog.webdevsimplified.com/2022-07/react-router/