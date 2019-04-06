import React from 'react'

class TimeContainer extends React.Component{
    render(){
        return(
        <div className="time-container">
            <div className="time">{this.props.time}</div>
            <div className="text">{this.props.text}</div>
        </div>
        );
    }
    shouldComponentUpdate(nextProps) {
        const differentTime = this.props.time !== nextProps.time;
        return differentTime;
    }
}
export default TimeContainer;