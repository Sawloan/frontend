import React,{useState,useEffect} from 'react';
import {Container,Col,Row,Card} from 'react-bootstrap';
import axios from 'axios'
import UpdatePart from './UpdatePart'
import swal from 'sweetalert'

const RetrieveUpdateDelete = (props) => {
    let [products,setProduct]  = useState([]);
    let [auth,setAuth] = useState({
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })

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

    const deleteCloth = (e,id)=>{
        axios.post("http://localhost:90/product/delete",{id:id},auth.config)
        .then((response)=>{
            if(response.data.success == true)
            {
                swal({
                    title:"Success",
                    text:response.data.message,
                    icon:"success"
                })
                window.location.reload();
            }
            else
            {
                swal({
                    title:"Error",
                    text:response.data.message,
                    icon:"error"
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                   

                    {
                        products.map((product)=>{
                            return(
                                <Col lg={6}>
                                    <Card className="clothCard">
                                      
                                    <Card.Img variant="top" src={`http://localhost:90/${product.pImage}`} />
                                   
                                    <Card.Body>
                                        <Card.Title className="text-center">{product.pName}</Card.Title>
                                        <p> <b>Rate: </b> Rs {product.pPrice}</p>
                                        <p> <b>Stars: </b>{product.pRating}</p>
                                        <p> <b>Informtion: </b>{product.pDesc}</p>
                                        
                                      
                                    </Card.Body>
                                    
                                    <div style={{background:"skyblue",borderRadius:"20px 20px 0px 0px"}} className="m-2"> 
                                    <Row className="p-3">
                                        <Col lg={6}>
                                            <button className="btn btn-primary btn-block" name="update" data-toggle="modal" data-target={`#product${product._id}`}> Update</button>
                                        </Col>
                                        <Col lg={6}>
                                        <button className="btn btn-danger btn-block" name="update" data-toggle="modal" data-target={`#delete${product._id}`}> Delete</button>
                                        </Col>
                                    </Row>
                                    <UpdatePart part={product} key={product._id}/>
                                    <div class="modal fade" id={`delete${product._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Delete cloth</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                         <p> Are your sure? </p>
                                         <div className="text-center">
                                             <button className="btn btn-danger w-50" name="delete__cloth" onClick={(event)=>{deleteCloth(event,product._id)}}> Delete </button>
                                             </div>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                    </div>
                                    </Card>
                                </Col>
                           
                            )
                        })
                    }
                   
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default RetrieveUpdateDelete;
