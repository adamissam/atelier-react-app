import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Avatar from './compenents/Avatar'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};
const homer = {
  image: "https://consequenceofsound.net/wp-content/uploads/2017/04/homer-simpson-feature1.png?w=807-.png",
  firstName: "Homer",
  lastName: "Simpson"
};
const lisa = {
  image: "data:image/jpeg;base64,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",
  firstName: "Lisa",
  lastName: "Simpson"
};

function App() {
  return (
    <div className="App">
      <Avatar {...bart}/>
      <Avatar {...homer}/>
      <Avatar {...lisa}/>
    </div>
  );
}

export default App;
