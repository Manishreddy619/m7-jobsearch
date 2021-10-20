import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails';
import Favorites from './components/Favorites';
function App() {
	return (
		<div className='app'>
			<Router>
				<Route path='/' exact component={InputForm} />
				<Route path='/companyDetails/:id' exact component={CompanyDetails} />
				<Route path='/favorites' exact component={Favorites} />
			</Router>
		</div>
	);
}

export default App;
