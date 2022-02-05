import React from 'react';
import { IcStar } from '../../../assets/images';
import propTypes from 'prop-types';
import './index.scss';

const Stars = (props) => {
	Stars.propTypes = {
		className: propTypes.string,
		value: propTypes.number,
		width: propTypes.number,
		height: propTypes.number,
		spacing: propTypes.number
	};

	const decimal = Number(props.value) % 1;
	let stars = [];
	let leftPos = 0;

	for (let i = 0; (i < 5) && (i < props.value - decimal); i++) {
		leftPos = leftPos + props.width;
		stars.push(
			<div
				className="star"
				key={`star-${i}`}
				style={{ left: i * props.width, width: props.width, height: props.height, marginRight: props.spacing }}
			/>
		);
	}
	
    if(decimal > 0 && props.value <= 5){
        stars.push(
            <div
				className="star"
				key={`star-end`}
				style={{ left: leftPos, width: decimal * props.width - props.spacing, height: props.height, }}
			/>
        )
    }

    let starPlaceholders = [];

    for (let i = 0; i < 5; i++) {
		starPlaceholders.push(
			<div
				className="star placeholder"
				key={`star-placeholder-${i}`}
				style={{ left: i * props.width, width: props.width, marginRight: props.spacing }}
			/>
		);
	}
    
	return (
        <>	
            <div className={['stars', props.className].join(" ")} style={{height: props.height}}>
                {starPlaceholders}
                {stars}
            </div>
        </>
    )
};

export default Stars;
