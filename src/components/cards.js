import React from "react";
import Data from "../data.json";
import {useHistory} from "react-router-dom"
import axios from "axios";
import { Cookies, useCookies } from 'react-cookie';

function Cards({setNum}) {
  const [cookies, setCookie] = useCookies(['user']);
  const history = useHistory();
  const AddtoCart = (detail) => {
      
    const axiosgetData = async () => {
            
      const d = await axios.get('https://footwear-backend.herokuapp.com/cart');
      

      if(send(detail)){

        let n = 0;
        for(let i=0; i<d.data.length; i++){
            if(d.data[i].username === cookies.user){
               n++;
            }
        }
      setNum(n + 1);}
      setCookie(Cookies.user)
    }
    axiosgetData();

  }

  const send = (detail) => {
    const data = {
      "username": `${cookies.user}`,
      "image": `${detail.image}`,
      "title": `${detail.title}`,
      "price": `${detail.price}`
    }

    axios.post("https://footwear-backend.herokuapp.com/cart", data);
    return true;
  }

  return (
    <div>
      <div class="container-fluid text-center">
        
        <h1 id="h1" className="text-center">Best Seller</h1>
        <div class="row">
          {Data.map((detail) => {
            return (
              
                <div class="card" >
                  
                    <img
                      class="card-img-top img-thumbnail" 
                      src={detail.image}
                      style={{width:"60%"}}
                      alt=""
                    />
                 
                  <div class="card-body">
                    
                      <h5 class="card-title">{detail.title}</h5>
                    
                    <h6>{detail.price}</h6>
                    <div className="btn1">
                    <button id="btn1" style={{ marginRight: "3px", borderColor: "skyblue", backgroundColor: "transparent"}} onClick={() => {AddtoCart(detail)}}>
                      ADD TO CART
                    </button>
                  </div>
                  </div>
                </div>
             
            );
          })}
        </div>
        <button class="button4" onClick={() => {history.push("/shopAll")}}>Shop All Products</button>
      </div>
    </div>
  );
}
export default Cards;
