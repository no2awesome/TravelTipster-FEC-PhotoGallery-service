import React from 'react';
import ReactDOM from 'react-dom';
import Header from './hotelHeader/hotelHeader.jsx';
import starRating from './starRating/starRating.jsx';
import PhotoGallery from './photoGallery/photoGallery.jsx';
import style from './index.css';

class Listing extends React.Component {
  constructor() {
    super();
    this.state = {
      currentHotel: 18
    }
  }

  getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable){return pair[1];}
    }
    return(false);
  }

  componentWillMount() {
    if (this.getQueryVariable("hotel")) {
      this.setState({currentHotel: this.getQueryVariable("hotel")})
    }
  }

  render() {
    const {currentHotel} = this.state;
    return (
      <div>
        <Header hotel={currentHotel} />
        <div className={style['listing-content']}>
          <div id={style['booking']}>Booking component goes here</div>
          <PhotoGallery hotel={currentHotel} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Listing />, document.getElementById('listing'));