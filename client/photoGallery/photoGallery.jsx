import React from 'react';
import axios from 'axios';
import style from './photoGallery.css';

class PhotoGallery extends React.Component {
	constructor() {
		super();
		this.switchHero = this.switchHero.bind(this);
		this.showModal = this.showModal.bind(this);
		this.hideModal = this.hideModal.bind(this);
		this.onModalContentClick = this.onModalContentClick.bind(this);
		this.state = {
			photos: [],
			hero: '',
			isLoading: true
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
		const self = this;

		// GET request
		axios.get(`/hotel/${this.state.currentHotel}/photos`)
	  .then(function (response) {
	    self.setState({
	    	hero: response.data[0].url,
				photos: response.data,
				isLoading: false
	    })

	  	// console.log("the first ten")
	  	// console.log(response.data.slice(0, 10))

	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });
	}

	showModal() {
		document.querySelector('#hero-modal').classList.add('photoGallery-active')
	}

	hideModal() {
		document.querySelector('#hero-modal').classList.remove('photoGallery-active')
	}

	onModalContentClick(e) {
		// don't let event bubble up the DOM tree
		e.stopPropagation();
	}

	render() {

		return (
			<div className="gallery">
				<div id={style['hero']} onClick={this.showModal}>
					<img src={this.state.hero} />
				</div>
				<div id={style['thumbnails']}>
				{
					!this.state.isLoading
					&& this.state.photos.slice(0, 10).map(thumbnail => <div className={style['thumbnail']}><img onClick={this.switchHero} src={thumbnail.url} /></div>)
				}
				</div>

			<div id="hero-modal" className={style['modal']} onClick={this.hideModal}>
	      <div className={style['modal-content']} onClick={this.onModalContentClick}>
          <img src={this.state.hero} />
          <span className={style['close-btn']} onClick={this.hideModal}>&times;</span>
      	</div>
   	 </div>

			</div>
			)

	}
}

export default PhotoGallery;