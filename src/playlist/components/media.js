import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends Component{
    state = {
        author:'Leonidas Esteban'
    }
    //constructor(props){
    //    super(props);
    //    this.state={
    //        author:props.author
    //    }
    //}
    handleClick = (event)=>{
        //console.log(this.props.title);
        this.setState({
            author:"Ricardo Celis",
        })
    }
    render(){
        const styles ={
            container:{
                color:'#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return(
          //  <div style={styles.container}> 
            
            
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover"> 
                    <img src={this.props.cover} alt="" width={240} height={160} className="Media-image"></img>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author ">{this.state.author}</p>
                </div>
           </div>
        )
    }
}
Media.propTypes = {
    cover: PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    author : PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'Audio']),
}
export default Media;