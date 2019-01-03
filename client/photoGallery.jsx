import React from 'react';
import axios from 'axios';

class PhotoGallery extends React.Component {
	constructor() {
		super();
		this.switchHero = this.switchHero.bind(this);
		this.state = {
			hero: './img/room/001.jpg',
			photos: []
		};
	}

	switchHero(e) {
		var clickedThumbnail = e.target;
		var newHero = clickedThumbnail.getAttribute("src");
		this.setState({hero: newHero});
		var selectedThumbnails = document.getElementsByClassName('selected-thumbnail');
		Array.prototype.forEach.call(selectedThumbnails, function(thumbnail) {
			thumbnail.classList.remove('selected-thumbnail');
		});
		clickedThumbnail.classList.add('selected-thumbnail');
		console.log(this.state)
	}

	componentDidMount() {
		const self = this;
		// GET request
		axios.get(`/hotel/${this.state.currentHotel}/photos`)
	  .then(function (response) {
	    // handle success
	    console.log(response.data);
	    // const image = response.data[0];

	    self.setState({
				photos: response.data
	    })
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });
	}

	render() {

		return (
			<div>
				<div id="hero">
					<img src={this.state.hero} />
				</div>
				<div id="thumbnails">
					<div><img onClick={this.switchHero} src="./img/room/003.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
					<div><img onClick={this.switchHero} src="./img/room/001.jpg" /></div>
				</div>
			</div>
			)

	}
}

export default PhotoGallery;