import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const CompanyCard = ({ item }) => {
	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>Company = {item.company_name}</Card.Title>
					<Card.Text> Job Title ={item.title}</Card.Text>
					<Link to={'/companyDetails/' + item._id}>
						<Button variant='primary'>Check details</Button>
					</Link>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default CompanyCard;
