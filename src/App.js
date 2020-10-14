import React from 'react';
import Routes from './Routes/RoutesIndex';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <Routes/>
  );
}

export default App;
