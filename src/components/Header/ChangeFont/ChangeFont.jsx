import React, { useState } from 'react';

//Icons
import { IoMdArrowDropdown } from 'react-icons/io';

//Style
import style from './ChangeFont.module.scss';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setFont, setActiveFont } from 'redux/slices/changeFontSlice';

export const ChangeFont = () => {
	const dispatch = useDispatch();
	const { activeFont } = useSelector(state => state.font);

	const [show, setShow] = useState(false);
	const [selected, setSelected] = useState(1);

	const handleClick = e => {
		dispatch(setFont(e.target.innerText));
		dispatch(setActiveFont(e.target.innerText));
		setShow(false);
	};

	return (
		<div className={style.changeFont}>
			<div onClick={() => setShow(!show)} className={style.openList}>
				<p>{activeFont}</p>
				<IoMdArrowDropdown />
			</div>

			{show && (
				<div className={style.dropDownList}>
					<ul>
						<li
							onClick={e => {
								handleClick(e);
								setSelected(1);
							}}
							className={selected === 1 ? style.active : ''}
						>
							Serif
						</li>
						<li
							onClick={e => {
								handleClick(e);
								setSelected(2);
							}}
							className={selected === 2 ? style.active : ''}
						>
							Sans-Serif
						</li>
						<li
							onClick={e => {
								handleClick(e);
								setSelected(3);
							}}
							className={selected === 3 ? style.active : ''}
						>
							Monospace
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};
