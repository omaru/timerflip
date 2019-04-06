import CountDown from './component/clock/CountDown';
let countDown = new CountDown('April 30,2019 00:00:00');

it('is able to get Days', () => {
     expect(countDown.getDays()).not.toBeNaN();
     expect(countDown.getDays()).not.toBeUndefined();
});
it('is able to get Hours', () => {
    expect(countDown.getHours()).not.toBeNaN();
    expect(countDown.getHours()).not.toBeUndefined();

});
it('is able to get Minutes', () => {
    expect(countDown.getMinutes()).not.toBeNaN();
    expect(countDown.getMinutes()).not.toBeUndefined();

});
it('is able to get Seconds', () => {
    expect(countDown.getSeconds()).not.toBeNaN();
    expect(countDown.getSeconds()).not.toBeUndefined();
});