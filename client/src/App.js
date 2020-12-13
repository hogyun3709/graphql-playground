import './App.css';
import logo from './spacex-logo.jpg'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloClient client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto'}}/>
        <Launches/>
      </div>
    </ApolloClient>

  );
}

export default App;
