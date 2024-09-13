#! usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'
const baseValues : any = {
USD : 1,
INR : 83.88,
CAD : 1.35,
SAR : 3.75,
GBP : 0.76,
PKR : 278.63,
}
 let answer =await inquirer.prompt([
    
    { name : "from",
      message :chalk.blue( "Which currency you want to convert from : "),  
      type: "list",
      choices : ["USD","INR","CAD","SAR","GBP","PKR"]
    },


    {   name : "to",
        message : chalk.blue("To which currency to convert : "),  
        type: "list",
        choices : ["USD","INR","CAD","SAR","GBP","PKR"]
      }
    , 

    {
        name : "Amount",
        message :chalk.blue("Enter Amount :"),
        type : "number",
    }

    

])
let fromAmount = baseValues[answer.from];    // base value in terms of usd   
let toAmount = baseValues[answer.to];        
let Amount = answer.Amount;
let baseAmount = Amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow("The converted value is "+convertedAmount));



