import React, {Component} from 'react';
import "./Clock.css";

class Clock extends Component {
	constructor(props){
		super(props);
		this.state= {
			days:0,
			hours:0,
			minutes:0,
			seconds:0,
		};
	}

	getTimeUntil(deadLine) {
		const time = Date.parse(deadLine) - Date.parse(new Date());
		const seconds = Math.floor((time/1000) % 60);
	    const minutes = Math.floor((time/1000/60) % 60);
	    const hours = Math.floor(time/(1000*60*60) % 24);
	    const days = Math.floor(time/(1000*60*60*24));
	    this.setState({days,hours, minutes,seconds}); 
	}

	componentWillMount() {
		this.getTimeUntil(this.props.deadLine);
	}
	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
	}
	render() {
		return(
			<div className= " hoppy">
	          <div className="Time"> {this.state.days} day(s) </div>
	          <div className="Time">{this.state.hours} hour(s) </div>
	          <div className="Time"> {this.state.minutes} minute(s) </div>
	          <div className="Time">{this.state.seconds} second(s) </div>
	        </div>
		);
	}
}

export default Clock;