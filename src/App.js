import React, { Component } from 'react';
import {graphql, QueryRenderer} from 'react-relay';
import environment from './index';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            viewer {
              id
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}

export default App;
