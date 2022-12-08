import React from 'react';
import './Product';
import './Product.css';
const isImageURL = require("valid-image-url");

const Product = (props) => {

      const { img, name, category, price, seller } = props.product;
      let image = isImageURL(img);
      console.log(image);
      return (
            <div className='product-container'>

                  <div className='text-title'>
                        <h2 className='title'>Name:{name}</h2>
                        <p>Category:{category}</p>
                        <p>Price :${price}</p>
                        <p><small>Seller:{seller}</small></p>


                  </div>


                  <button className='btn-card'><p>Add To Card</p></button>

            </div>

      );
};

export default Product;
// //     {
//       img ?
//       <img src={img} alt="" />
//       :
//       <h2>Not Found</h2>
// }