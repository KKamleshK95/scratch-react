import { useEffect, useState } from "react"
import Restuarant from "./Restuarants"
import "./body.css"

const Body = () =>{
    
    useEffect(()=>{
       getData()
    }, [])
const [cardData , seCarData] = useState([])
    const getData = async() =>{
        const data = await fetch("https://fakestoreapi.com/products")
        
        const res = await data.json()
        console.log(res);
        seCarData(res);
    }
    return(
        <div> 
            <button className="m-3 btn btn-info" onClick={()=>{const filter= cardData.filter((x)=>x.rating.rate > 4)
    
            seCarData(filter)}} >filter</button>
            <div className="body-cards">
            {cardData.map((x) => <Restuarant data={x}/>)}
            </div>
        </div>
    )
}
export default Body