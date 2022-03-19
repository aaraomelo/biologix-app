import './App.css';
import Header from './components/Header/Header';
import WeatherForm from './components/WeatherForm/WeatherForm';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {

  return (
    <div className="wrapper">
      <Header />
      <WeatherForm />
      <WeatherCard />
    </div>
  );
}

export default App;
