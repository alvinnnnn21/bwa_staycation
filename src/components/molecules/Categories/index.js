import React from 'react';
import Category from '../Category';

const Categories = (props) => {

    return (
        <section className="container">
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
                            <Category key={`category-item-${i}`} data={item}/>
                        ))
                    )
                }
            </div>
        </section>
    );
};

export default Categories;
