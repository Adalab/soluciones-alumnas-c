import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
	render() {
		const onChangeHandler = (event)=>{
			const selectedValue = event.target.value;
			console.log(`Tu destino es viajar a ${selectedValue}`);
			this.titulo=`Tus destino es viajar a ${selectedValue}`;
			this.city=cityLiteral[`${selectedValue}`];
			this.forceUpdate();
		}

		const cityLiteral= {
			'Buenos Aires': 'https://www.lugaresturisticosdeargentina.com/wp-content/uploads/2017/05/Lugares-tur%C3%ADsticos-en-Buenos-Aires.jpg',
			'Sydney': 'http://images.nationalgeographic.com.es/medio/2017/02/13/shutterstock-209684521_fd608903.jpg',
			'Praga': 'https://www.rumbo.es/hoteles/img/republica-checa/praga.jpg',
			'Boston': 'https://www.techstars.com/uploads/Screen-Shot-2017-05-15-at-10.50.53-AM.png',
			'Tokio': 'http://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Japan/Tokyo/Tokyo%20lead-xlarge.jpg'
		};
		return (
			<div className="container">
				<select className="select" onChange= {onChangeHandler}>
					<option value="Buenos Aires">Buenos Aires</option>
					<option value="Sydney">Sydney</option>
					<option value="Praga">Praga</option>
					<option value="Boston">Boston</option>
					<option value="Tokio">Tokio</option>
				</select>
				<h1 className="title">{this.titulo}</h1>
				<CityImage city={this.city}></CityImage>
			</div>
		)
	}
}


export default Destiny;
