import { connect } from 'react-redux';
import { createEvent } from '../../actions/event_actions';
import { createEventForm } from './create_event_form';


const mapStateToProps = state => ({
  event: {
    name: '',
    date: '',
    location: '',
    venue: '',
    description: ''
  },
  formType: 'Submit Event'
});

const mapDispatchToProps = dispatch => ({
  action: event => dispatch(createEvent(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(createEventForm);