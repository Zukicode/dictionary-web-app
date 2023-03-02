import React from 'react';

//Icons
import { BsPlayFill } from 'react-icons/bs';

//Redux
import { useSelector } from 'react-redux';
import useSound from 'use-sound';

//Style
import style from './General.module.scss';

export const General = () => {
	const { wordsInfo } = useSelector(state => state.word);
	const [play] = useSound(
		wordsInfo.phonetics[0] ? wordsInfo.phonetics[0].audio : ''
	);
	return (
		<div className={style.general}>
			<div className={style.text}>
				<h1>{wordsInfo.word ? wordsInfo.word : 'No info'}</h1>
				<p>{wordsInfo.phonetic ? wordsInfo.phonetic : 'No info'}</p>
			</div>
			<div className={style.audio}>
				<button onClick={play}>
					<BsPlayFill size='34px' />
				</button>
			</div>
		</div>
	);
};
