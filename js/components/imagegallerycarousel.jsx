import React from 'react';
import ReactDOM from 'react-dom';
import ImageGallery from 'react-image-gallery';


class Imagegallerycarousel extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    };
    
    handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  
    
    
    
    render(){
       
	const images = [
      {
        original: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/2-480x360.jpg',
        thumbnail: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/2-480x360.jpg',
      },
      {
        original: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/110-480x360.jpg',
        thumbnail: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/110-480x360.jpg'
      },
      {
        original: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/54-480x360.jpg',
        thumbnail: 'http://manufakturafitnessu.pl/wp-content/uploads/2013/12/54-480x360.jpg'
      }
    ]
        
        return (
            <div id="container">
		        <ImageGallery
        items={images}
        slideInterval={2000}
        onImageLoad={this.handleImageLoad}/>	
	        </div>
        )
    }
    
};
export default Imagegallerycarousel;


