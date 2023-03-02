import React, { useEffect } from 'react';

//Style
import style from './Word.module.scss';

//Components
import { Container } from 'components/shared/Container/Container';
import { General } from './General/General';
import { Noun } from './Noun/Noun';

//Routing
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords } from 'redux/slices/getWords';
import { Loader } from 'components/Loader/Loader';

//Redux

const Word = () => {
	const { word } = useParams();

	const dispatch = useDispatch();
	const { status, wordsInfo } = useSelector(state => state.word);

	console.log();

	useEffect(() => {
		dispatch(fetchWords(word));
	}, [word, dispatch]);

	if (status === 'loading') {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (status === 'success') {
		return (
			<Container>
				<div className={style.word}>
					<General />
					{wordsInfo.meanings.map(detalies => (
						<Noun
							title={detalies.partOfSpeech}
							listNoun={detalies.definitions}
							listSynonyms={detalies.synonyms}
						/>
					))}
				</div>
			</Container>
		);
	}
};

export default Word;
