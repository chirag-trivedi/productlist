import React from "react";
import { connect } from 'react-redux';
import { getProducts } from "../actions";

let Button = ({ getProducts }) => (
    <div>
        <br />

        <center>
            <button onClick={getProducts} className="btn btn-success">
                Press to see the Products
            </button>
        </center>
    </div>
);

const mapDispatchToProps = {
    getProducts: getProducts
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;