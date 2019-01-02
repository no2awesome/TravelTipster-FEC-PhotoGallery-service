import React from 'react';

class PhotoGallery extends React.Component {
	constructor() {
		super();
		this.switchHero = this.switchHero.bind(this);
		this.state = {
			hero: './img/room/001.jpg'
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
	}

	componentDidMount() {
		// GET request
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