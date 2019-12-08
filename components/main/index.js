import React, {useState} from 'react';
import { StyleSheet, Keyboard } from 'react-native';
import { TextInput, Button, Card} from 'react-native-paper';
import {deezerEntry, spotifyEntry, deezerRegex, spotifyRegex} from '../../services/apiTemplate'
import { useDispatch } from 'react-redux';
import {SET_DATA_CARD} from '../../actions/actionsType';
const deezerImage = require('../../images/deezer.png');
const spotifyImage = require('../../images/spotify.png');


const Main = (props) => {
    const [uri, setUri] = useState("");
    const [buttonEnabled, setButtonEnabled] = useState(true);
    const [inputError, setInputError] = useState(false);
    const dispatch = useDispatch();
    
    const _hideKeyboard = () => {
        Keyboard.dismiss();
    }

    async function handleSubmit(){
        props.setLoading(true);
        props.setShowCard(false);

        _hideKeyboard();
        var data;
        let icon;
        if (spotifyRegex.test(uri)) {
            data = await spotifyEntry(uri);
            icon = deezerImage;
        } else if (deezerRegex.test(uri)) {
            data = await deezerEntry(uri);
            icon = spotifyImage;
        }
        if (data !== "") {
            dispatch({ type: SET_DATA_CARD, payload: { ...data, icon: icon } });
            props.setShowCard(true);
        }else{
            props.setCardError(true);
        }
        
        setButtonEnabled(true);
        setUri("");
        props.setLoading(false);
        
    }
    
    function handleChange(text){
        setUri(text);
        if(text.length > 0){

            if (!(spotifyRegex.test(text) || deezerRegex.test(text))) {
                setInputError(true);
                setButtonEnabled(true);
            }else{
                setButtonEnabled(false);
                setInputError(false);
            }
        }else{
            setInputError(false);
        }
    }
    return (
        <Card elevation={3} style={styles.card}>
            <Card.Content>
                    <TextInput
                        label="URL"
                        placeholder="Cole a URL aqui"
                        selectionColor="#6200ee"
                        error={inputError}
                        value={uri}
                        mode="outlined"
                        selectTextOnFocus={true}
                        textContentType="URL"
                        onChangeText={text => handleChange(text)}
                        autoCorrect={false}
                    />
                    <Button disabled={buttonEnabled} compact={true} mode="contained" style={styles.button} onPress={handleSubmit}>GO</Button>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0,
        marginTop: 10,
        marginLeft: 12,
        marginBottom: 0,
        marginRight: 12
    },
    button:{
        marginTop: 10
    },

});
export default Main;