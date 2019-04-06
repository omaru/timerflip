import React from 'react'
const UP_TO = 'April 30,2019 00:00:00';
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.endDate = new Date(UP_TO).getTime();
    }

    render(){
        return(
            <p>Hello</p>
        );
    }
}
export default Clock;
