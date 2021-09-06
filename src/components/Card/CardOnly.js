import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardSingle(props) {
  return (
    <>
      <li className='cards__item' to={props.path}>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.pName}>
            <img
              className='cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'><h5>Prouct Information : <br/></h5>
            <h5 className='cards__item__desc'>{props.pDesc}</h5>
          </div>
          <div className='cards__item__info'><h5>Rate : <br/></h5>
            <h5 className='cards__item__price'>{props.pPrice}</h5>
          </div>
          <div className='cards__item__info'><h5>Stars : <br/></h5>
            <h5 className='cards__item__rate'>{props.pRate}</h5>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardSingle;
