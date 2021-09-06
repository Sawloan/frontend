import React,{useState,useEffect} from 'react';
import axios from 'axios';
import swal from 'sweetalert'
 
const UpdatePart = (props) => {
    const {part} = props
    let [product,setProduct] = useState({
        "pName":part.pName,
        "pDesc":part.pDesc,
        "pPrice":part.pPrice,
        "pRating":part.pRating,
        "pImage":part.pImage,
        "id":part._id,
        "config":{
            "headers":{
                "authorization":`Bearer ${localStorage.getItem("token")}`
            }
        }
    })
    const changeHandler = (e)=>{
        var {name,value} = e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }
 
    const fileHandler = (e)=>{
        var {name,files} = e.target;
        setProduct({
            ...product,
            [name]:files[0]
        })
        
    }
 
    const UpdatePart = (e)=>{
        
        e.preventDefault();
        var fData = new FormData();
        fData.append("pName",product.pName)
        fData.append("pDesc",product.pDesc)
        fData.append("pRating",product.pRating)
        fData.append("pPrice",product.pPrice)
        fData.append("pImage",product.pImage)
        fData.append("id",product.id)
        console.log(product)
        axios.put("http://localhost:90/product/update",fData,product.config)
        .then((response)=>{
            console.log(response)
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
            <div class="modal fade" id={`product${part._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form method="post" onSubmit={UpdatePart}>
                               <div className="form-group">
                                  <label> Jersey </label>  
                                  <input type="text" className="form-control" name="pName" value={product['pName']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Rate </label>  
                                  <input type="text" className="form-control" name="pPrice" value={product['pPrice']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Stars </label>   
                                  <input type="text" className="form-control" name="pRating" value={product['pRating']} onChange={(event)=>{changeHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label>  Image </label>  
                                  <input type="file" accept="image/*" className="form-control-file" name="pImage"  onChange={(event)=>{fileHandler(event)}} required/> 
                                </div> 
                                <div className="form-group">
                                  <label> Information </label>  
                                  <textarea className="form-control" name="pDesc" value={product['pDesc']} onChange={(event)=>{changeHandler(event)}} required></textarea>
                                </div> 
                                <div className="text-center">
                                    <button className="btn btn-primary w-50 btn-lg" name="add_product" type="submit"> Add Product </button>
                                </div>
                        </form>
      </div>
      </div>
      </div>
      </div>
        </React.Fragment>
    )
}
 
export default UpdatePart