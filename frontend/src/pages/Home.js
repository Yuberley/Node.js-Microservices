import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { onSignup, onGetProducts  } from '../store/actions'
import { ProductDetails } from "./ProductDetail";

const Home = () => {
  
    const { categories, products } = useSelector(state => state.shoppingReducer);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(onGetProducts())      
    },[]);

    const listOfcategories = () => {
       return <div className="row" aria-label="Basic example">
          {categories.map(item => {
              return <button key={item} type="button" onClick={() => {}} className="btn btn-lg m-2" style={{ backgroundColor: '#4E8A37', borderRadius: 30, color: '#FFF'}}>
              {item.toUpperCase()}
             </button>
          })}
      </div>
    }

    const listOfProducts = () => {

     return products.map((item) => {
        return <ProductCard item={item}/>
      })
      
    }

    return (
        
        <div className="container-fluid p-0">
           <img src="bg2.jpg" className="card-img" alt="fonde de frutas y verduras"
            style={{height: '81vh', width: '100%', objectFit: 'cover'}}
           ></img>
            <div className="container-flud mb-4" style={{height:80, justifyContent: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#15803D'}}>
                <div className="row justify-content-center">
                  {categories && listOfcategories()}
                </div>
            </div> 
             
            <div className="d-flex flex-row flex-nowrap overflow-auto">
                {products && listOfProducts()}
                
            </div>
            
         
        </div>
    )
    
    

}


export { Home };

 