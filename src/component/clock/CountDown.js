class CountDown{
    constructor(endDateText){
        this.endDate = new Date(endDateText).getTime();
    }
    getDays(){
        let remainingTime = this.getRemainingTime();
        return Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    }
    getHours(){
        let remainingTime = this.getRemainingTime();
        return Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    getMinutes(){
        let remainingTime = this.getRemainingTime();
        return Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    }
    getSeconds(){
        let remainingTime = this.getRemainingTime();
        return Math.floor((remainingTime % (1000 * 60)) / 1000);
    }

    getRemainingTime(){
        let now = new Date().getTime();
        return this.endDate - now;
    }
}
export default CountDown;