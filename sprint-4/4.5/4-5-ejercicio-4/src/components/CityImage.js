import React from 'react';

class CityImage extends React.Component {
	render(){
		return(
			<img  alt="Imagen" src={this.props.city}/>
		);
	}
}

export default CityImage;

//city['Praga'] Para recoger el valor de un objeto literal
