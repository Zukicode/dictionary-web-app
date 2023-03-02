import React, { useEffect, useState } from 'react';

//Style
import style from './ToggleButton.module.scss';

export const ToggleButton = () => {
	const [toggleButton, setToggleButton] = useState(false);

	const changeThemeOnClick = () => {
		if (toggleButton) {
			setToggleButton(false);
			document.querySelector('body').setAttribute('data-theme', 'light');
		} else {
			setToggleButton(true);
			document.querySelector('body').setAttribute('data-theme', 'dark');
		}
	};

	useEffect(() => {
		if (document.querySelector('body').getAttribute('data-theme') === 'light') {
			setToggleButton(false);
		} else {
			setToggleButton(true);
		}
	}, []);

	return (
		<div
			onClick={changeThemeOnClick}
			className={
				toggleButton
					? `${style.toggleButton} ${style.active}`
					: style.toggleButton
			}
		>
			<div className={style.ball}></div>
		</div>
	);
};
