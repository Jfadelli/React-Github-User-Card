import React from 'react';
import './App.css';
import UserCard from './components/UserCard'
import StyleSheet from './styles/StyleSheet'

class App extends React.Component {
  render() {
    return (
      <StyleSheet.AppWrapper>
        <UserCard />
      </StyleSheet.AppWrapper >
    );
  }
}

export default App