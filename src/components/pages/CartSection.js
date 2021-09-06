import axios from 'axios';
import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Container,Col,Row,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import swal from 'sweetalert'
import {MdAddCircle} from 'react-icons/md'
import {AiFillMinusCircle} from 'react-icons/ai'

export default function CartSec(props) {
  let [bookings,setBookings] = useState([]);
  let [auth,setAuth] = useState({
    "config":{
        "headers":{
            "authorization":`Bearer ${localStorage.getItem("token")}`
        }
    }
})
  useEffect(()=>{
    axios.get("http://localhost:90/retrieve/myBookings",auth.config)
    .then((response)=>{
      console.log(response)
      setBookings(response.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  const deleteBooking = (e,id)=>{
    axios.post("http://localhost:90/delete/booking",{pid:id},auth.config)
    .then((response)=>{
        if(response.data.success == true)
        {
            swal(
                {
                    title:"Success",
                    text:response.data.message,
                    icon:"success"
                }
            )
            window.location.reload();
        }
        else
        {
            swal(
                {
                    title:"Error",
                    text:response.data.message,
                    icon:"error"
                }
            )
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}

const minusClick = (event,val) =>{
  var qty = document.querySelector(`.productQuantity${val._id}`);
  var price = document.querySelector(`.price${val._id}`);

  var myQuantity = parseInt(qty.innerHTML);
  var myPrice = parseInt(price.innerHTML);

  var singlePrice = myPrice/myQuantity;

  if(myQuantity > 1)
  {
      myQuantity-=1;
  
      axios.post("http://localhost:90/update/booking",{pid:val._id,qty:myQuantity},auth.config)
      .then((response)=>{
          if(response.data.success == true)
          {
              qty.innerHTML = myQuantity;
             
              price.innerHTML = singlePrice*myQuantity
              swal(
                  {
                      title:"Success",
                      text:response.data.message,
                      icon:"success"
                  }
              )
              window.location.reload();
          }
          else
          {
              swal(
                  {
                      title:"Error",
                      text:response.data.message,
                      icon:"error"
                  }
              )
          }
          
      })
      .catch((err)=>{
          console.log(err);
      })
  }

}

const plusClick = (event,val)=>{
  var qty = document.querySelector(`.productQuantity${val._id}`);
 
  var price = document.querySelector(`.price${val._id}`);
  var myQuantity = parseInt(qty.innerHTML);
  
  var myPrice = parseInt(price.innerHTML);
  var singlePrice = myPrice/myQuantity;
  
  
  
    
      myQuantity+=1;
      
      axios.post("http://localhost:90/update/booking",{pid:val._id,qty:myQuantity},auth.config)
      .then((response)=>{
          if(response.data.success == true)
          {
            qty.innerHTML = myQuantity;
            price.innerHTML = singlePrice*myQuantity
           
              swal(
                  {
                      title:"Success",
                      text:response.data.message,
                      icon:"success"
                  }
              )
              window.location.reload();
          }
          else
          {
              swal(
                  {
                      title:"Error",
                      text:response.data.message,
                      icon:"error"
                  }
              )
          }
          
      })
      .catch((err)=>{
          console.log(err);
      })
  

}
  return (
    <Container>
      <Row>
        <Col lg={12}>
        <h1 className='cart'>Cart</h1>
          </Col>

  
          {
            bookings.map((book)=>{
              return(
                <Col lg={3}>
                <Card className="partCard">
                                    
                  <Card.Img variant="top" src={`http://localhost:90/${book.product_id.pImage}`} />
                                   
                    <Card.Body>
                      <Card.Title>{book.product_id.pName}</Card.Title>
                                     
                        <p className="text-center"> <b>Quantity: </b></p>
                        <p className="text-center"> <AiFillMinusCircle style={{fontSize:"21px",color:"blue"}} onClick={(event)=>{minusClick(event,book)}}/>  <span className={`productQuantity${book._id}`}> {book.quantity} </span> <MdAddCircle style={{fontSize:"21px",color:"blue"}} onClick={(event)=>{plusClick(event,book)}}/> </p>
                                        
                        <p><strong>Rate: </strong> Rs <span className={`price${book._id}`}>{book.price}</span> </p>
                        </Card.Body>
                                    
                        <div className="text-center">
                          <Link className="btn btn-danger btn-lg w-50 mb-3" name ="addToCart" onClick={(event)=>{deleteBooking(event,book._id)}}>Delete</Link>
                        </div>
                        
                </Card>
              </Col>   
              )
            })
          }
      </Row>
    </Container>



    

  )
}
