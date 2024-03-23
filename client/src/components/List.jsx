import React from "react";
import { Link } from "react-router-dom";

const List = props => {
    console.log(props); 
        return (
        <div>
            { props.products.map((product, index) => (
                <p key={index}> 
                    <Link to={'/api/products/get'}> { product.nombre } </Link>
                </p>
            ))}
        </div>
    );
};

export default List;
