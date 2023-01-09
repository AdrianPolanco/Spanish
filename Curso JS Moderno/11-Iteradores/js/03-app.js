for (let i = 0; i < 21; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FIZZ BUZZ");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    }
}
