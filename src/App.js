import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes, Route } from 'react-router'
import React, { Fragment, Component} from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal'


export default class App extends Component{
  render(){
    return(
      <>
       <Navbar/>
       <Routes>
         <Route  exact path="/" element={<ProductList/>}/>
         <Route         path="/details"  element={<Details/>}/>
         <Route         path="/cart" element={<Cart/>}/>
         <Route  path= "*" element={<Default/>}/>
       </Routes>
        <Modal/>
      </>
    )
  }
}