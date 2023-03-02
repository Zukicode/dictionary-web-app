import React from 'react';

//Style
import style from './Home.module.scss';

//Image
import homeImage from 'assets/image/home.png';

//Components
import { Container } from 'components/shared/Container/Container';

const Home = () => {
	return (
		<div className={style.home}>
			<Container>
				<img src={homeImage} alt='home' />
				<div className={style.text}>
					<h1>Find the word you need!</h1>
					<p>Enter your word in the input field for details!</p>
				</div>
			</Container>
		</div>
	);
};

export default Home;
