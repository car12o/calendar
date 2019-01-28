import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './style.css';

const localizer = BigCalendar.momentLocalizer(moment)

const Home = () => (
	<div className="container">
		<BigCalendar
			localizer={localizer}
			events={[{
				id: 12.5,
				title: 'Late Same Night Event',
				start: new Date(2015, 3, 17, 19, 30, 0),
				end: new Date(2015, 3, 17, 23, 30, 0),
			}]}
			startAccessor="start"
			endAccessor="end"
		/>
	</div>
)

export default Home;
