import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CompanyDetails from './components/CompanyDetails';
function App() {
	return (
		<div className='app'>
			<Router>
				<Route path='/' exact component={InputForm} />
				<Route path='/companyDetails/:id' exact component={CompanyDetails} />
			</Router>
		</div>
	);
}

export default App;
