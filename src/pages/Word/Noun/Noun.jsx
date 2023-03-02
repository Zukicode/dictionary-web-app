import React from 'react';
import { useSelector } from 'react-redux';

//Style
import style from './Noun.module.scss';

export const Noun = ({ title, listNoun, listSynonyms }) => {
	const { wordsInfo } = useSelector(state => state.word);

	console.log(wordsInfo);

	return (
		<div className={style.noun}>
			<div className={style.title}>
				<p>{title}</p>
				<div></div>
			</div>

			<div className={style.meaning}>
				<div className={style.listOfMeaning}>
					<p className={style.titleMeaning}>Meaning</p>
					<ul>
						{listNoun.map(listItem => (
							<li>{listItem.definition}</li>
						))}
					</ul>
				</div>

				{listSynonyms.length !== 0 && (
					<div className={style.synonyms}>
						<p>Synonyms</p>
						{listSynonyms.length > 3 ? (
							<p>
								{listSynonyms[0]} | {listSynonyms[1]} | {listSynonyms[0]}
							</p>
						) : (
							listSynonyms.map(synonym => <p>{synonym}</p>)
						)}
					</div>
				)}
			</div>
		</div>
	);
};
