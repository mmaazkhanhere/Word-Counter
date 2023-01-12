#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

var paragraph:string[]=[];

function turnOffDisplay(){
    return new Promise((resolve)=>{
        setTimeout(resolve,3000);
    })
}

async function titleDisplay(){
    let firstTitle=chalkAnimation.rainbow('Welcome to Word Counter App')
    await turnOffDisplay();
    let secondTitle=chalkAnimation.neon('Lets Get You Started. \nPlease follow the guidelines provided')
    await turnOffDisplay();
    secondTitle.stop();
}

async function userParagraph(){
    let userpara= await inquirer.prompt([{
        name:'userpara',
        type:'input',
        message:'Please enter at least one sentence'
    }])
    paragraph.push(userpara.userpara);
    console.log(paragraph);
}

async function wordCounter(){
    await titleDisplay();
    await userParagraph();
    let totalWords=paragraph[0].split(' ');
    console.log(`Total words: ${totalWords.length}`);
}

wordCounter();