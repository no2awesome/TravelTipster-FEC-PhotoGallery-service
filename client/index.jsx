import React from 'react';
import ReactDOM from 'react-dom';
import Header from './hotelHeader.jsx';
import starRating from './starRating.jsx';
import PhotoGallery from './photoGallery.jsx';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<PhotoGallery />, document.getElementById('photo-gallery'));