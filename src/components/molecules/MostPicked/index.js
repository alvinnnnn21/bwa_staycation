import React from 'react';
import { Button } from '../../';
import Fade from 'react-reveal/Fade';

const MostPicked = (props) => {
	return (
		<section className="container" ref={props.refMostPicked}>
            <Fade bottom>
                <h4 className="mb-3">Most Picked</h4>
                <div className="container-grid">
                    {
                        props.data.map((item, i) => (
                            <div key={i} className={`item column-4 ${i === 0 ? " row-2" : " row-1"}`}>
                                <Fade bottom delay={500 * i}>
                                    <div className="card card-featured">
                                        <div className="tag">
                                            {`$${item.price}`}
                                            <span className="font-weight-light"> per {item.unit}</span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button className="stretched-link d-block text-white" type="link" href={`/properties/${item._id}`}>
                                                <h5>{item.name}</h5>
                                            </Button>
                                            <span>{item.city + "," + item.country}</span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        ))
                    }
                </div>
            </Fade>
		</section>
	);
};

export default MostPicked;
