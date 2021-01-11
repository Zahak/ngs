/**
 * @see https://app.pluralsight.com/course-player?clipId=0ca677b5-a4bb-4b87-a3bb-8754b40af300
 */

const timerHello = seconds => {
    console.log('Hello after ' + seconds + ' seconds');
};

[4, 8].forEach(value => {
    setTimeout(timerHello, value * 1000, value);
})