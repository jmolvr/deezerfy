import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Avatar, Text} from 'react-native-paper';


const ErrorCard = (props) => {
    return (
        <Card style={styles.card} elevation={3}>
            <Card.Title title="OPS :(" right = {() => <Avatar.Icon style={styles.avatar} size={30} icon="alert-circle" />} />
            <Card.Content>
                <Text>Sorry, we couldn't find a link!</Text>
            </Card.Content>
        </Card>

    );
}
const styles = StyleSheet.create({
    card: {
        flex: 0,
        marginTop: 10,
        marginLeft: 12,
        marginBottom: 10,
        marginRight: 12
    },
    avatar: {
        marginRight: 15
    }
});


export default ErrorCard;