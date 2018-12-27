import React, { Component } from 'react';
import Media from './media'
import './playlist.css'
import Categories from './categories'
class Playlist extends Component {
    render() {
        //const playlist = this.props.data.categories[2].playlist;
        const playlist = this.props.data.categories;
        console.log(this.props.data);
        return (
            <div>
                {
                    playlist.map((item)=>{
                        return(
                            <div key={item.id}>
                            <Categories{...item}/>
                            <div className="Playlist">
                            {
                                item.playlist.map((item) =>{
                                    return <Media {...item} key={item.id}/>
                                })
                            }
                            </div>
                            </div>
                        )
                    })
                }
           
            </div>
        )

    }
}
export default Playlist;
