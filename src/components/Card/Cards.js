import React,{useState,useEffect} from 'react';
import CardItem from './CardItem';
import axios from 'axios';
import { Row,Container,Col,Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FaShoppingCart} from'react-icons/fa';

function Cards() {
  let [products,setProduct]  = useState([]);
  useEffect(() =>{
    axios.get("http://localhost:90/product/showAll")
    .then((response)=>{
        console.log(response);
        setProduct(
            response.data.data
        )
    })
    .catch((err)=>{
        console.log(err);
    })
},[])

 

  return (
    <div className='cards'>
      <h1>Product Section:</h1>
      <Container>
        <Row>
         {
            products.map((product)=>{
              return(
                <Col lg={4}>
                  <Card className="partCard">
                                      
                                      <Card.Img variant="top" src={`http://localhost:90/${product.pImage}`} />
                                     
                                      <Card.Body>
                                          <Card.Title className="text-center">{product.pName}</Card.Title>
                                          <p> <b>Rate: </b> Rs {product.pPrice}</p>
                                          <p> <b>Star: </b>{product.pRating}</p>
                                          <p> <b>Product Information: </b>{product.pDesc}</p>
                                          
                                        
                                      </Card.Body>
                                      
                                    
                                      <Row className="p-3">
                                          <Col lg={12}>
                                              <Link style={{float:"right",color:"orange",fontSize:"50px"}} name="cart" to={`/productDetails/`+product._id}> <FaShoppingCart/> </Link>
                                          </Col>
                                          
                                      </Row>
                                      
                                     
                                      </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      
    </div>
  );
}

export default Cards;
