import React from 'react';//sirve para crear los componentes 
import {render} from 'react-dom';//react dom sirve para renderizar los componentes
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

//ReactDOM.render(//que renderizo y donde lo hare);
const app = document.getElementById('app');
     

render(<Playlist data={data}/>, app);