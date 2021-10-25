import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { removeFromFavoritesAction } from '../actions';
// const mapStateToProps = (state) => ({
// 	companies: state.companies.favorites,
// });

// mapDispatchToProps is a function returning an object
// const mapDispatchToProps = (dispatch) => ({
// 	remove: (index) => {
// 		dispatch(removeFromFavoritesAction(index));
// 	},
// });
const Favorites = () => {
	// console.log(companies);
	const companies = useSelector((state) => state.companies.favorites);
	const dispatch = useDispatch();
	return (
		<Container>
			<Row>
				{companies?.map((item, i) => {
					return (
						<Col
							key={i}
							xs={12}
							sm={6}
							md={4}
							lg={3}
							className='mt-3'
							id='main'
							style={{ marginBottom: '3rem' }}>
							<Card>
								<Card.Body>
									<Card.Title>index = {item.company_name}</Card.Title>
									<Card.Text> Job Title ={item.title}</Card.Text>

									<Button
										variant='success mt-2'
										onClick={(e) => dispatch(removeFromFavoritesAction(i))}>
										remove from favorites 🤨
									</Button>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
export default Favorites;
