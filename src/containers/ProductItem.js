import React from "react";
import { connect } from 'react-redux';

const imgStyle = {//custom css styling
    height: '200px',
    width: '200px',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const articleStyle = { //custom css styling
    width: '70%',
    margin: '10px auto',
    color: 'olive',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
}


let ProductItem = ({ article }) => (
    article ?
        article.map((item) => {// map() calls this code iteratively for every record in "article" array
            return (
                <article key={item.id} style={articleStyle}>
                    <div className="media">
                        <div className="media-left">
                            <img src={item.img} className="media-object" alt="" style={imgStyle} />
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">{item.name}</h4>
                            <p>{item.description}</p>
                        </div>
                    </div>

                </article>
            )
        })
        :
        null
)

const mapStateToProps = (state) => ({ article: state.products });

ProductItem = connect(mapStateToProps, null)(ProductItem);

export default ProductItem;

