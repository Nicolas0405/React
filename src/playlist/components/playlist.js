import React from 'react';
import Media from './media'
import './playlist.css'
import Categories from './categories'
import Play from '../../icons/components/play';

function Playlist(props) {
    //const playlist = props.data.categories[2].playlist;
    const playlist = props.data.categories;
    console.log(props.data);
    return (
        <div>
            {
                playlist.map((item) => {
                    return (
                        <div key={item.id}>
                            <Categories{...item} />
                            <div className="Playlist">
                                <Play 
                                size={50}
                                color="red"
                                />
                                {
                                    item.playlist.map((item) => {
                                        return <Media {...item} key={item.id} />
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
export default Playlist;
