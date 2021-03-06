import React from 'react';
import axios from 'axios';

class PhotoGallery extends React.Component {
	constructor() {
		super();
		this.switchHero = this.switchHero.bind(this);
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.state = {
			photos: [],
			hero: './img/room/001.jpg',
			isLoading: true,
			firstThumbnails: []
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
		// console.log(this.state)
	}

	componentDidMount() {
		const self = this;

		// GET request
		axios.get(`/hotel/${this.state.currentHotel}/photos`)
	  .then(function (response) {
	    // handle success
	    // console.log(response.data[0]);

	    self.setState({
				photos: response.data,
				isLoading: false
	    })
	  })

	  .then(function(response) {
	  	var thumbnails = [];
	  	for (var i = 0; i < 10; i++) {
	  		thumbnails.push(self.state.photos[i].url)
	  	}
	  	self.setState({firstThumbnails: thumbnails})
	  })

	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });
	}

	showModal() {
		// click #hero --> add class .show-modal to .modal div
		document.querySelector('.modal').classList.add('show-modal')
	}

	hideModal() {
		// click .close-btn --> remove class .show-modal to .modal div
		document.querySelector('.modal').classList.remove('show-modal')
	}

	render() {

		return (
			<div>
				<div id="hero" onClick={this.showModal}>
					<img src={this.state.hero} />
				</div>
				<div id="thumbnails">
				{
					!this.state.isLoading
					? this.state.firstThumbnails.map(thumbnail => <div><img onClick={this.switchHero} src={thumbnail} /></div>)
					: console.log('still loading')
				}
				</div>

			<div className="modal">
	      <div className="modal-content">
          <img src={this.state.hero} />
          <span className="close-btn" onClick={this.hideModal}>&times;</span>
      	</div>
   	 </div>

			</div>
			)

	}
}

export default PhotoGallery;