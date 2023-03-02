import React from 'react';

//Style
import style from './Header.module.scss';

//Icons
import { GiBlackBook } from 'react-icons/gi';

//Components
import { Container } from 'components/shared/Container/Container';
import { Search } from 'components/Search/Search';
import { ChangeTheme } from './ChangeTheme/ChangeTheme';
import { ChangeFont } from './ChangeFont/ChangeFont';

//Routing
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();

	const redirectToHome = () => navigate('/');

	return (
		<div className={style.header}>
			<Container>
				<div className={style.changesActivite}>
					<GiBlackBook onClick={redirectToHome} className={style.logo} />

					<div className={style.activities}>
						<ChangeFont />
						<div className={style.line}></div>
						<ChangeTheme />
					</div>
				</div>

				<div className={style.search}>
					<Search />
				</div>
			</Container>
		</div>
	);
};
