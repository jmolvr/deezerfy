import React from 'react'
import {Clipboard, StyleSheet, Share, Image} from 'react-native';
import {IconButton, Card} from 'react-native-paper';
import {useSelector} from 'react-redux';


const CardLink = (props) => {
    const cardInfo = useSelector(state => state);   

    const onShare = async () => {
       try{
            await Share.share({
                message: cardInfo.link
            });
        }catch (error) {
             alert(error.message);
        }
    }

    const copyClipboard = () => {
        Clipboard.setString(cardInfo.link)
        props.setVisible(true);
    }

    return (
        <Card onLongPress={copyClipboard} elevation={3} style={styles.card}>
            <Card.Cover style={{flex:1, resizeMode: "contain"}} source={{ uri: cardInfo.cover}} />
            <Card.Title
                title={cardInfo.title}
                subtitle={cardInfo.artist}
                right={ props => <Image resizeMethod="resize" style={styles.image} source={cardInfo.icon}/>}
            />
            <Card.Actions style={styles.actions}>
                <IconButton
                    icon="content-copy"
                    size={25}
                    onPress={copyClipboard}
                />
                <IconButton
                    icon="share"
                    size={25}
                    onPress={onShare}
                />
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    card:{
        flex: 1, 
        marginTop: 10,
        marginLeft: 12,
        marginBottom: 10,
        marginRight: 12 
    },
    image:{
        marginRight: 15,
        height:30,
        width:30,
        resizeMode: "center",
        backgroundColor:"#ffffff"
    }
});

export default CardLink;