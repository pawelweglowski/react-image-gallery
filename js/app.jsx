import React from 'react';
import ReactDOM from 'react-dom';
import Imagegallerycarousel from './components/imagegallerycarousel.jsx';



class App extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    
        
    render() {
        return (
            <div>
                <Imagegallerycarousel />
                
            </div>
            
        )
    }
}
    

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
