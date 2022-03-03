import React, {useState, useEffect} from 'react'
import Data from '../menWomen.json';
import Footer from '../components/footer';
import axios from 'axios';
import ShoppingKartItem from '../components/ShoppingKartItem';
import { useCookies } from 'react-cookie';


 function ShopProducts() {
  const [cookies, setCookie] = useCookies(['user']);
  const [number, setNumber] = useState(0)

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

    useEffect(() => {
      const axiosgetData = async () => {
              
        const d = await axios.get('https://footwear-backend.herokuapp.com/cart');      
        
        var n = 0;
        for(var i=0; i<d.data.length; i++){
            if(d.data[i].username === cookies.user){
               n++;
            }
        }

        setNumber(n)  
        setCookie(cookies.user)    
      }
      axiosgetData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [number])
    
    const AddtoCart = (detail) => {
        
        
        if(send(detail)){
        setNumber(number+1)}
  
    }

    return (
            <div>

            <ShoppingKartItem num={number}/>
            <div class="container-fluid">
        <h1 id="h1" style={{marginTop:"30px",marginBottom:"50px"}}>All Products</h1>
            <div class="row">
          {Data.map((detail) => {
            return (
              <div class="col-sm-3 text-center">
                <div class="card" style={{ width: "18rem;" }}>
                  
                    <img
                      class="card-img-top"
                      src={detail.image}
                      alt=""
                    />
                 
                  <div class="card-body">
                    
                      <h5 class="card-title">{detail.title}</h5>
                    
                    <h6>{detail.price}</h6>

                    <button id="btn1" style={{ marginRight: "3px", borderColor: "skyblue", backgroundColor: "transparent"}} onClick={() => {AddtoCart(detail)}}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
        <Footer/>
        </div>
      
    )
}
export default ShopProducts;