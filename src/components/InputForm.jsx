import React, { useEffect, useState } from 'react';
import { getjobs } from '../utilis/fetches';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getJobDataThunk } from '../actions';
// const mapStateToProps = (state) => ({
// 	jobdata: state.data.stock,
// });
// const mapDispatchToProps = (dispatch) => ({
// 	getData: () => {
// 		dispatch(getJobDataThunk());
// 	},
// });
const InputForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const jobdata = useSelector((state) => state.data.stock);

	const dispatch = useDispatch();
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	const results = !searchTerm
		? jobdata
		: jobdata.filter((item) =>
				item.company_name
					.toLowerCase()
					.includes(searchTerm.toLocaleLowerCase()),
		  );
	// const fetchdata = async () => {
	// 	let result = await getjobs();
	// 	console.log(result.data);
	// 	let dataArray = result.data;
	// 	setData(dataArray);
	// };
	useEffect(() => {
		// getData();
		dispatch(getJobDataThunk());
	}, []);
	return (
		<div className='form'>
			<input
				type='text'
				placeholder='Search'
				value={searchTerm}
				onChange={handleChange}
				style={{
					width: '70%',
					height: '40px',
					padding: '20px',
					margin: '30px',
				}}
			/>

			<Container>
				<Link to={'/favorites'}>
					<Button variant='primary'>favorites😎</Button>
				</Link>
				<Row>
					{results?.map((item, i) => {
						return (
							<Col
								xs={12}
								sm={6}
								md={4}
								lg={3}
								className='mt-3'
								id='main'
								style={{ marginBottom: '3rem' }}>
								<CompanyCard item={item} key={item._id} />
							</Col>
						);
					})}
				</Row>
			</Container>
		</div>
	);
};

// export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
export default InputForm;
