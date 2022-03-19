import { connect } from 'react-redux';
import './WeatherCard.css';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function WeatherCard({ getWeather }: Props) {
  const city = getWeather.name;
  const country = getWeather.sys.country;
  const { icon, description } = getWeather.weather[0];
  const { temp, feels_like, humidity } = getWeather.main;
  return (
    <section className="weather-part">
      <img src={`http://openweathermap.org/img/wn/${icon || "01d"}@2x.png`} alt="Weather Icon" />
      <div className="temp">
        <span className="numb">{Math.floor(temp) || "_"}</span>
        <span className="deg">°</span>C
      </div>
      <div className="weather">{description || "_ _"}</div>
      <div className="location">
        <i className='bx bx-map'></i>
        <span>{`${city || "_"}, ${country || "_"}`}</span>
      </div>
      <div className="bottom-details">
        <div className="column feels">
          <i className='bx bxs-thermometer'></i>
          <div className="details">
            <div className="temp">
              <span className="numb-2">{Math.floor(feels_like) || "_"}</span>
              <span className="deg">°</span>C
            </div>
            <p>Sensação Térmica</p>
          </div>
        </div>
        <div className="column humidity">
          <i className='bx bxs-droplet-half'></i>
          <div className="details">
            <span>{`${humidity || "_"}%`}</span>
            <p>Humidade</p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MapStateToPropsTypes {
  getWeather: WeatherInterface
}

interface MapDispatchToPropsTypes { }

function mapStateToProps(state: any) {
  return {
    getWeather: state.weather.weather
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (WeatherCard);

