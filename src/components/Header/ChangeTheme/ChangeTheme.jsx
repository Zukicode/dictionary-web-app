import React from 'react';

//Icons
import { BsMoon } from 'react-icons/bs';

//Style
import style from './ChangeTheme.module.scss';

//Components
import { ToggleButton } from 'components/UI/ToggleButton/ToggleButton';

export const ChangeTheme = () => {
	return (
		<div className={style.changeTheme}>
			<ToggleButton />
			<BsMoon />
		</div>
	);
};
