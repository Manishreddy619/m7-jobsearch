import React, { useEffect, useState } from 'react';
import { getjobs } from '../utilis/fetches';

import CompanyCard from './CompanyCard';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
const InputForm = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [data, setData] = useState([]);
	const handleChange = (event) => {
		setSearchTerm(event.target.value);
	};
	const results = !searchTerm
		? data
		: data.filter((item) =>
				item.company_name
					.toLowerCase()
					.includes(searchTerm.toLocaleLowerCase()),
		  );
	const fetchdata = async () => {
		let result = await getjobs();
		console.log(result.data);
		let dataArray = result.data;
		setData(dataArray);
	};
	useEffect(() => {
		fetchdata();
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
				<Row>
					{results?.map((item) => {
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

export default InputForm;
