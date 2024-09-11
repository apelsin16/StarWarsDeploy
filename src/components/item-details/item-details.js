import React from 'react';
import './item-details.css';
import defaultImage from './default-image.png';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{ item[field] }</span>
    </li>
  );
};

export {
  Record
};

const ItemDetails = (props) => {

    const { item } = props;
    
    return (
      <div className="item-details card">
     
        <img className="item-image"
          src={props.image}
          alt="item"
          onError={(e) => e.target.src = defaultImage}
        />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(props.children, (child) => {
                return React.cloneElement(child, { item });
              })
            }
          </ul>
          
        </div>
      </div>
    );
  }


export default ItemDetails;