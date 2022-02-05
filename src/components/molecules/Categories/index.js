import React from 'react';
import Category from '../Category';
import Fade from 'react-reveal/Fade'; 

const Categories = (props) => {

    return (
        <section className="container">
            <Fade bottom>
                <h4 className="mb-3 font-weight-medium">
                    {props.data.name}
                </h4>
                <div className="container-grid">
                    {   
                        props.data.items.length == 0 ? (
                            <div className="row">
                                <div className="col-auto align-items-center">
                                    There is no property at this category
                                </div>
                            </div>
                        ) : (
                            props.data.items.map((item, i) => (
                                <Category key={`category-item-${i}`} data={item} index={i}/>
                            ))
                        )
                    }
                </div>
            </Fade>
        </section>
    );
};

export default Categories;
