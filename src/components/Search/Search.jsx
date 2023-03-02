import React, { useState } from 'react';

//Icons
import { BiSearch } from 'react-icons/bi';

//Style
import style from './Search.module.scss';

//Routing
import { useNavigate } from 'react-router-dom';

export const Search = () => {
	const [value, setValue] = useState('');

	const navigate = useNavigate();

	const searchByEnter = e => (e.keyCode === 13 ? searchByWord() : '');
	const onChangeSearch = e => setValue(e.target.value);

	const searchByWord = () => {
		if (value !== '') {
			navigate(`words/${value}`);
			setValue('');
		}
	};

	return (
		<div className={style.search}>
			<input
				type='text'
				value={value}
				onChange={onChangeSearch}
				onKeyDown={searchByEnter}
				placeholder='Search words here...'
			/>
			<button onClick={searchByWord}>
				<BiSearch />
			</button>
		</div>
	);
};
