//Routing
import { Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Word from './pages/Word/Word';

//Components
import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';

//Redux

function App() {
	const { font } = useSelector(state => state.font);

	return (
		<div className='App' style={{ fontFamily: font }}>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/words/:word' element={<Word />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
