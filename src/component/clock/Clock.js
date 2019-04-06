import React from 'react'
import TimeContainer from './TimeContainer';
import CountDownClock from './CountDown';
import '../..//css/clock.css';
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.clock = new CountDownClock(props.endTimeText);
    }

    render(){
        return(
            <div id="clock">
                <TimeContainer  time={this.clock.getDays()}     text="Days"/>
                <TimeContainer  time={this.clock.getHours()}   text="Hours"/>
                <TimeContainer  time={this.clock.getMinutes()} text="Minutes"/>
                <TimeContainer  time={this.clock.getSeconds()} text="Seconds"/>
            </div>
        );
    }
    componentDidMount() {
        this.interval = setInterval(() => this.forceUpdate(), 1000);
    }

    componentWillUnmount() {
        alert('offline');
        clearInterval(this.interval);
     }
}
export default Clock;
