/**
 * @see 1-getting-started/2-timers/9-more-challenges.txt Challenge 1
 */

const helloWorld = delay => {
    setTimeout(() => {
        console.log('Hello world. ' + delay);
        helloWorld(delay + 1);
    }, delay * 1000);
}

helloWorld(1);