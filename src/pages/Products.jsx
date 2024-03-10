import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import Header from "../components/Header";
import { get } from "../api/api";
export default function Products() {
  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(false);
  let [productLoading, setProductLoading] = useState(false);
  let [cart, setCart] = useState([]);
  

  async function getCategories() {
    try {
      setLoading(true);
        let response = await get("products/categories")
        

      setCategories(response);
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
    setLoading(false);
  }

  async function getProducts() {
    try {
      setProductLoading(true);
      let response = await get("products")
      setProducts(response);
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
    setProductLoading(false);
  }

  async function filterProducts(cat) {
    try {
      setProductLoading(true);
      let request = await fetch(
        "https://fakestoreapi.com/products/category/" + cat
      );
      let response = await request.json();

      setProducts(response);
    } catch (error) {
      alert("something went wrong");
      console.log(error);
    }
    setProductLoading(false);
  }

  function clickHandler(data) {
    filterProducts(data);
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  
  function handleClick(id) {
      alert(id);
      let tempProducts = [...products]
    //   console.log(tempProducts)
      let tempProduct = tempProducts.filter(x => x.id == id)
      let p = tempProduct[0] 
      p.quantity = 1


      let cartCopy = [...cart]
      cartCopy.push(p)
      setCart (cartCopy) 

  }

  return (
      <>
          <Header cartDetails={cart } />
         
         
          <div className="card ">
      <div className=" my-3">
        {categories.map((cat) => {
          return (
            <button
              onClick={() => {
                clickHandler(cat);
              }}
              class="btn btn-primary  fs-5 mx-1 "
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-3 p-4 ">
              <div className="card h-100">
                
                  <img src={product.image} className="card-img-top " height={350}  alt="" />
                      <div className="card-body mx-2 my-2">
                      <div className="id ">
                  {" "}
                  {product.id}
                    <h5 className="card-title"> {product.title}</h5>
                    {/* <p className='card-text'>{product.description}</p> */}
                    <a href="" className="btn btn-primary">
                      ${product.price}
                    </a>
                    <button
                      type="button"
                                  className="btn btn-warning mx-2 " style={{ textAlign:'right' }}
                      onClick={() => handleClick(product.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
      </>
  );
}
