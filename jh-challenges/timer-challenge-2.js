/**
 * @see https://app.pluralsight.com/course-player?clipId=0ca677b5-a4bb-4b87-a3bb-8754b40af300
 */

const intervalId = setInterval(() => {
    console.log('Hello world')

    if (++counter >= 5) {
        clearInterval(intervalId);
        console.log('Done exit');
    }
}, 1000);

let counter = 0;