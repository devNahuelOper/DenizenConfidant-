import React from 'react';
import { connect } from 'react-redux';
import { createEvent, receiveEventErrors, clearEventErrors } from '../../actions/event_actions';
import  CreateEventForm  from './create_event_form';


const mapStateToProps = state => ({
  event: {
    name: '',
    date: '',
    location: '',
    venue: '',
    description: '',
    headliners: '',
    cost: ''
  },
  errors: state.errors.events,
  formType: 'Submit Event',
  // events: Object.values(state.entities.events)
});

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  receiveEventErrors: errors => dispatch(receiveEventErrors(errors)),
  clearEventErrors: () => dispatch(clearEventErrors)
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm);