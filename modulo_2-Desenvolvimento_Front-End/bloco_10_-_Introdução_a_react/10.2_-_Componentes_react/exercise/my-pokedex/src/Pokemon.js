import React from 'react';
import PropTypes from 'prop-types'; 

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;    

    return ( 
      <div className='pokemon'>
        <div>
          <h4>{name}</h4>
          <p>{type}</p>
          <p>{`Peso: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.shape({
    measurementUnit: PropTypes.string,
    value: PropTypes.number,
  }),
  image: PropTypes.string,
}

export default Pokemon;