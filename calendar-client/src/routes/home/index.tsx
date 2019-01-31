import React from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './style.css';
import Modal from '../../components/event'
import actions from '../../store/actions';
const { eventsAc } = actions;

const localizer = BigCalendar.momentLocalizer(moment);

class Home extends React.Component<IHomeProps, IHomeState> {
	constructor(props: any) {
		super(props);
		this.state = {
			modal: {
				isOpen: false,
				data: {},
			}

		};
		props.getEvents();
	}

	closeModal() {
		this.setState({
			modal: Object.assign({}, this.state.modal, { isOpen: false }),
		});
	}

	openModal(e: any) {
		const { _id, title, description, start, end } = e;
		const modal = {
			isOpen: true,
			data: {
				_id: _id || '',
				title: title || '',
				description: description || '',
				start: new Date(start).toISOString().split('T')[0],
				end: new Date(end).toISOString().split('T')[0],
			},
		};

		this.setState({
			modal: Object.assign({}, this.state.modal, modal),
		});
	}

	public render() {
		return (
			<div className="home-container">
				<BigCalendar
					selectable
					localizer={localizer}
					events={this.props.events}
					onSelectSlot={(e) => this.openModal(e)}
					onSelectEvent={(e) => this.openModal(e)}
				/>
				<Modal
					isOpen={this.state.modal.isOpen}
					closeModal={this.closeModal.bind(this)}
					data={this.state.modal.data}
				>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = (state: IState) => ({
	events: state.events,
})

const mapDispatchToProps = (dispatch: Function) => ({
	getEvents: () => dispatch(eventsAc.getEvents()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
