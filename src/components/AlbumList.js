import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };
    async componentWillMount() {
        const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
        this.setState({ albums: response.data });
    }
    renderAlbums() {
        return this.state.albums.map(album => (
            <AlbumDetail key={album.title} album={album} />
        ));
    }
    render() {
        return (<View>
            {this.renderAlbums()}
        </View>
        );
    }
}


export default AlbumList;
