import React, {useState, useEffect} from 'react'
import Cards from '../components/cards';
import Carousel from '../components/carousel';
import Collection from '../components/Collection';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Brand from '../components/Brand';
import ShoppingKartItem from '../components/ShoppingKartItem';
import axios from 'axios';
import { useCookies } from 'react-cookie';

function HomePage() {
    const[num, setNum] = useState(0);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        const axiosgetData = async () => {
            
            const d = await axios.get('https://footwear-backend.herokuapp.com/cart');
            
            var n = 0;
            for(var i=0; i<d.data.length; i++){
                if(d.data[i].username === cookies.user){
                   n++;
                }
            }
            setNum(n);
            setCookie(cookies.user)
          }
          axiosgetData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [num])

    return (
        <div>
            <ShoppingKartItem num={num}/>
            <Navbar/>
            <Carousel/>
            <Collection num={num}/>
            <Cards setNum={setNum}/>
            <Brand/>
            <Footer/>
        </div>
    )
}
export default HomePage;