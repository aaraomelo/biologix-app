import { connect } from 'react-redux';
import './WeatherForm.css';
import { getWeatherByCity, getWeatherByGeolocation, setCityField } from '../../store/weather/actionCreators';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function WeatherForm({
  getCity,
  setCity,
  setWeatherByCity,
  setWeatherByGeolocation
}: Props) {
  return (
    <section className="input-part">
      <p className="info-txt">SAD</p>
      <div className="content">
        <input
          type="text"
          spellCheck="false"
          placeholder="Digite o nome da cidade"
          value={getCity}
          onChange={(e)=> {setCity(e.target.value)}}
          onKeyDown={(e)=> { e.key === 'Enter' &&  setWeatherByCity()}}
        />
        <div className="separator"></div>
        <button
          onClick={setWeatherByGeolocation}
        >
          Obter localização do dispositivo
        </button>
      </div>
    </section>
  );
}

interface MapStateToPropsTypes {
  getWeatherStatus: RequestInterface,
  getCity: string
}

interface MapDispatchToPropsTypes {
  setCity: (value: string) => void,
  setWeatherByCity: () => Promise<any>,
  setWeatherByGeolocation: () => Promise<any>
}

function mapStateToProps(state: any) {
  return {
    getCity: state.weather.address,
    getWeatherStatus: state.weather.requests.getWeatherByCity
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCity: (value: string) => dispatch(setCityField({ value })),
    setWeatherByCity: () => dispatch(getWeatherByCity()),
    setWeatherByGeolocation: () => dispatch(getWeatherByGeolocation())
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (WeatherForm);

