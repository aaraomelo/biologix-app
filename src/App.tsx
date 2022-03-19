import './App.css';
import { connect } from 'react-redux';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;
function App({ }: Props) {
  return (
    <div className="App">

    </div>
  );
}

interface MapStateToPropsTypes { }

interface MapDispatchToPropsTypes { }

function mapStateToProps(state: any) {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (App);

