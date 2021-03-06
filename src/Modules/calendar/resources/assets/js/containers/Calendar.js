import React, {Component} from 'react';
import Event from '../components/Event';
import {connect} from 'react-redux';
import {newEvent, editEvent, closeEvent, saveEvent, selectRange} from "../actions/eventActions";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from '@fullcalendar/interaction';
import Fade from 'react-reveal/Fade';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';
import '../../sass/main.scss';

class Calendar extends Component {
	
	calendarComponentRef = React.createRef();
	
	constructor(props) {
		super(props);
		this.showEventModal.bind(this);
		
		this.state = {
			calendar: {
				options: {
					defaultView: "dayGridMonth",
					selectable: true,
					header: {
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek today prev,next'
					},
					events: `${location.href}/events`,
				}
			}
		};
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		if(!prevProps.event.willUpdate && prevProps.event.willUpdate !== this.props.event.willUpdate) {
			let fullCalendar = this.calendarComponentRef.current.getApi();
			fullCalendar.refetchEvents();
		}
	}
	
	showEventModal = () => {
		if(this.props.event.showModal) {
			return (
				<Event show={this.props.event.showModal}
				       data={this.props.event.eventData.date}
				       dateEnd={this.props.event.eventData.dateEnd}
				       content={this.props.event.eventData.content}
				       title={this.props.event.eventData.title}
				       allDay={this.props.event.eventData.allDay}
				       startTime={this.props.event.eventData.startTime}
				       stopTime={this.props.event.eventData.stopTime}
				       location={this.props.event.eventData.location}
				       id={this.props.event.eventData.id}
				       type={this.props.event.type}
				       loader={this.props.event.loading}
				       save={this.props.saveEvent}
				       closeModal={() => this.props.closeEvent()}/>
			);
		}
	};
	
	render() {
		return (
			<div>
				<Fade>
					<FullCalendar plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
					              eventClick={this.props.editEvent}
					              ref={this.calendarComponentRef}
					              dateClick={this.props.newEvent}
					              select={this.props.selectRange}
					              {...this.state.calendar.options} />
				</Fade>
				{this.showEventModal()}
				<NotificationContainer/>
			</div>
		);
	}
	
}

const mapStateToProps = (state) => {
	return {
		event: state.event
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		newEvent: (data) => {
			dispatch(newEvent(data));
		},
		editEvent: (data) => {
			dispatch(editEvent(data));
		},
		closeEvent: (data) => {
			dispatch(closeEvent(data));
		},
		saveEvent: (data) => {
			dispatch(saveEvent(data));
		},
		selectRange: (data) => {
			dispatch(selectRange(data));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
