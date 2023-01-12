#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
var paragraph = []; //an empty string array
function turnOffDisplay() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2500);
    });
}
async function titleDisplay() {
    let firstTitle = chalkAnimation.rainbow('Welcome to Word Counter App');
    await turnOffDisplay();
    let secondTitle = chalkAnimation.neon('Lets Get You Started. \nPlease follow the guidelines provided');
    await turnOffDisplay();
    secondTitle.stop();
}
async function userParagraph() {
    let userpara = await inquirer.prompt([{
            name: 'userpara',
            type: 'input',
            message: 'Please enter at least one sentence'
        }]);
    paragraph.push(userpara.userpara); //the user entered data is pushed into the paragraph array
}
async function wordCounter() {
    await titleDisplay(); //calling functions
    await userParagraph();
    let totalWords = paragraph[0].split(' '); //splitting the string on the basis of 'space'. Result stored as an array
    console.log(chalk.bgBlue(`Total words: ${totalWords.length}`)); //displaying the total number of words
}
wordCounter();
