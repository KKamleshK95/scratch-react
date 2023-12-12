import { useEffect } from "react"

const Restuarant = (props) =>{
    const {data} = props
  
   
    return(
        <div className="card mx-3" style={{width: "18rem"}}>
        <img src={data?.image} className="card-img-top img-thumbnail h-50 " alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
export default Restuarant