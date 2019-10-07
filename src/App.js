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
  image: "https://www.schoolswork.co.uk/media/images/lisa-simpson.gif",
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
