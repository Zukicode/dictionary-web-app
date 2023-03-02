import React from 'react';

//Style
import style from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={style.ldsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
