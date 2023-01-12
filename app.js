#! /usr/bin/env node
import chalkAnimation from "chalk-animation";
function turnOffDisplay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
}
async function titleDisplay() {
    let firstTitle = chalkAnimation.rainbow('Welcome to Word Counter App');
    await turnOffDisplay();
    let secondTitle = chalkAnimation.neon('Lets Get You Started. \nPlease follow the guidelines provided');
    await turnOffDisplay();
    secondTitle.stop();
}
titleDisplay();
