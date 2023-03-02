import React from 'react';

//Style
import style from './NotFound.module.scss';

//Components
import { Container } from 'components/shared/Container/Container';

//Image
import NotFoundImage from 'assets/image/not-found.gif';

const NotFound = () => {
	return (
		<Container>
			<div className={style.notFound}>
				<img src={NotFoundImage} width='250px' alt='not-found' />
				<div className={style.text}>
					<h1>Sorry, but this page not found!</h1>
					<p>
						Error <b>404!</b> You can reload your page or contact with us to fix
						this problem!
					</p>
				</div>
			</div>
		</Container>
	);
};

export default NotFound;
