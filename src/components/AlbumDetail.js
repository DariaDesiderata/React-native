import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album;
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTitleStyle } = styles;
    return (
        <Card>
            <CardItem>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTitleStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardItem>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerTitleStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    }
};
export default AlbumDetail;
