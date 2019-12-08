import React, { useState } from 'react';
import { Provider as PaperProvider, Snackbar, Appbar } from 'react-native-paper';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import CardLink from './components/card';
import Main from './components/main';
import Loading from './components/loading';
import ErroCard from './components/Error';
import Store from './store';

export default function App() {
  const [visible, setVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [error, setCardError] = useState(false);

  const logica = isLoading ? <Loading /> : showCard ? <CardLink setVisible={setVisible} /> : error ? <ErroCard /> : null;

  return (
    <Provider store={Store}>
      <PaperProvider>
        <StatusBar barStyle="light-content" backgroundColor="#6200ee" />
        <Appbar.Header statusBarHeight={0}>
          <Appbar.Content title="DeezerFy" />
        </Appbar.Header>
        <View style={styles.container}>
          <Main setLoading={setLoading} setShowCard={setShowCard} setCardError={setCardError} />
          {logica}
          <Snackbar
            visible={visible}
            duration={500}
            onDismiss={() => setVisible(false)}
          >
            Copied to Clipboard
          </Snackbar>
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1
  }
})