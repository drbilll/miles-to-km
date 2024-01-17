/*Exercise 4 - Miles-to-km converter, version 2
Allow a use to enter any number they want to convert from miles to kilometer. hint: use the prompt() to ask for use input
Create your work in a local folder called miles-to-km (create a remote repo with the same name)
Create branches and merge as required
Commit your code and project to GitHub
Deploy your project to render (this should happen with commits you do to GitHub)
Submit the following to the appropriate section on Moodle
Your public GitHub link
Your public render link*/

const kilometer = prompt("Enter kilometer value:"); // User input in km

const kilometer_number = Number(kilometer);// Typecast to number

//Calculation of km to miles conversion (1 miles is 1.60934 kilometers)
const mile = kilometer_number/1.60934;

const mile_2dec = mile.toFixed(2);

console.log(`The distance of ${kilometer} kms is equal to ${mile_2dec} miles`);
alert(`The distance of ${kilometer} kms is equal to ${mile_2dec} miles`);