import React from 'react';
import { Stars } from '../../';
import { 
	IllTestimoni,
	IllTestimoniFrame
} from '../../../assets/images';
import { Button } from '../../';
import Fade from 'react-reveal/Fade';

const Testimoni = (props) => {
	return (
		<Fade bottom>
			<section className="container">
				<div className="row align-items-center">
					<div className="col-auto" style={{marginRight: "70px"}}>
						<div className="testimonial-hero" style={{margin: "30px 0 0 30px"}}>
							<img src={IllTestimoni} alt="Testimonial" className="position-absolute" style={{ zIndex: 1, }}/>
							<img src={IllTestimoniFrame} alt="Testimonial Frame" className="position-absolute" style={{ margin: "-30px 0 0 -30px"}}/>
						</div>
					</div>
					<div className="col">
						<h4 style={{ marginBottom: 40 }}>
							{props.data.name}
						</h4>
						<Stars value={props.data.rate} height={35} width={35} spacing={4}></Stars>
						<h5 className="h2 font-weight-light line-height-2 my-3">
							{props.data.content}
						</h5>
						<span className="text-gray-500">
							{props.data.familyName + "," + props.data.familyOccupation}
						</span>
						<div className="">
							<Button className="btn px-5" style={{marginTop: 40}} hasShadow isPrimary type="link" href="{`/testimoni/${props.data._id}`}">Read their story</Button>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
};

export default Testimoni;
