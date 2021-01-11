/**
 * @see 1-getting-started/2-timers/9-more-challenges.txt Challenge 2
 */

const helloWorld = delay => {
    let counter = 1;

    const intervalId = setInterval(() => {
        console.log(counter + ') Hello world: ' + delay)

        if (counter++ === 5) {
            clearInterval(intervalId);
            helloWorld(++delay);
        }
    }, delay * 100);
}

helloWorld(1);