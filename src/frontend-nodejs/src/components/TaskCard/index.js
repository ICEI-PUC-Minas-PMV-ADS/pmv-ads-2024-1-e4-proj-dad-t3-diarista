import React from 'react'; 
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types'; 
import { Card1 } from './styles'; 

const TaskCard = ({ image, title, link }) => ( 
  <Card1> 
    <Link to={link}> 
      <img src={image} alt={title} /> 
    </Link> 
    <h5>{title}</h5> 
  </Card1> 
); 

TaskCard.propTypes = { 
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  link: PropTypes.string.isRequired, 
}; 

export default TaskCard;