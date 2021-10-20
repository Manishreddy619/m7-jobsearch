import React from 'react';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToFavoritesAction } from '../actions';
const mapStateToProps = (state) => ({});

// mapDispatchToProps is a function returning an object
const mapDispatchToProps = (dispatch) => ({
	addToCart: (company) => {
		dispatch(addToFavoritesAction(company));
	},
});
const CompanyCard = ({ item, addToCart, i }) => {
	return (
		<Container>
			<Card>
				<Card.Body>
					<Card.Title>Company = {item.company_name}</Card.Title>
					<Card.Text> Job Title ={item.title}</Card.Text>
					<Link to={'/companyDetails/' + item._id}>
						<Button variant='primary'>Check details👼</Button>
					</Link>
					<Button variant='success mt-2' onClick={(e) => addToCart(item)}>
						Add to Favorites 🤩
					</Button>
				</Card.Body>
			</Card>
		</Container>
	);
};
export default connect(mapStateToProps, mapDispatchToProps)(CompanyCard);
