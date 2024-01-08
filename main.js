import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0033,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    },
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "Form",
        choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select your convertion currency:"
    },
    {
        type: "number",
        name: "ammount",
        message: "select your convertion ammount:"
    },
]);
const { from, to, ammount } = answers;
if (from && to && ammount) {
    let result = convertion[from][to] * ammount;
    console.log(`your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
