import logo from './logo.svg';
import Users from './Users';
import Parent from './Parent';
import './App.css';

function App() {
  const user = {
    name: 'John Doe',
    age: 30,
    location: 'New York, USA',
    bio: 'Software developer with a passion for creating amazing applications.'
  };

  return (
    <div>
      <h1>User Profile</h1>
      <Users 
        name={user.name} 
        age={user.age} 
        location={user.location} 
        bio={user.bio} 
      />
      <Parent />
    </div>
  );
}

export default App;