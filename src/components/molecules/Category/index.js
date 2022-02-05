import React from 'react';
import { Button } from '../..';
import Fade from 'react-reveal/Fade';

const Category = (props) => {

    return (
        <div className="item column-3 row-1">
            <Fade bottom delay={300 * props.index}>
                <div className="card">
                    {
                        props.data.isPopular && (
                            <div className="tag">Popular
                                <span className="font-weight-light"> Choice</span>
                            </div>
                        )
                    }
                    <figure className="img-wrapper" style={{height: "180px"}}>
                        <img src={props.data.imageUrl} alt={props.data.name} className="img-cover" />
                    </figure>
                    <div className="meta-wrapper">
                        <Button type="link" href={`/properties/${props.data._id}`} className="stretched-link d-block text-gray-800">
                            <h5 className="h4">{props.data.name}</h5>
                        </Button>
                        <span className="text-gray-500">
                            {props.data.city + "," + props.data.country}
                        </span>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Category;
