import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { changeLocation } from 'containers/App/actions';
import { makeSelectLocation } from 'containers/App/selectors';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  onChangeSearchLocation: (location) => dispatch(changeLocation(location))
});

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
