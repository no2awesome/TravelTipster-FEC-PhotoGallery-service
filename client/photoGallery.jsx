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
		console.log(e);
		var newHero = e.target.getAttribute("src");
		this.setState({hero: newHero});
		console.log("old", this.state);
	}

	render() {
		console.log("new", this.state);
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