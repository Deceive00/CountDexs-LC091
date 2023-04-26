
import './App.css';
import NavigationBar from './components/navigation/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Searching from './pages/Search';
import Favourite from './pages/Favourite';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider, 
  gql 
} from '@apollo/client';
import CountryListForContinent from './pages/CountryListForContinent';
import CountryDetail from './pages/CountryDetail';

const client = new ApolloClient({

  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
        <div className='container'>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/:continentCode" element={<CountryListForContinent/>}/>
            <Route path='/country/:countryCode' element={<CountryDetail/>}/>
            <Route path="/search" element={<Searching/>}/>
            <Route path="/favourite" element={<Favourite/>}/>
          </Routes>
        </div>
        <NavigationBar />
      </div>
    </ApolloProvider>
  );
}

export default App;
