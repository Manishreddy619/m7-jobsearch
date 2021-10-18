import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { getjobs } from '../utilis/fetches';
import { Markup } from 'interweave';

const CompanyDetails = () => {
	let { id } = useParams();
	const [data, setData] = useState([]);
	console.log(id);
	const fetchdata = async () => {
		let result = await getjobs();
		console.log(result.data);
		let dataArray = result.data;
		setData(dataArray);
	};
	useEffect(() => {
		fetchdata();
	}, []);
	let company = data.filter((el) => el._id === id.toString());
	console.log(company);
	return (
		<div>
			<Container>
				{company.map((el) => (
					<Card className='text-center' key={el._id}>
						{/* <Card.Header>{el.company_name}</Card.Header> */}
						<h2>{el.company_name}</h2>
						<Card.Body>
							<Card.Title>job title:{el.title}</Card.Title>
							<Card.Text>
								<Markup content={el.description} />
							</Card.Text>
							<Link to={'/'}>
								<Button variant='primary'>Back to homepage</Button>
							</Link>
						</Card.Body>
						<Card.Footer className='text-muted'>2 days ago</Card.Footer>
					</Card>
				))}
			</Container>
		</div>
	);
};

export default CompanyDetails;
