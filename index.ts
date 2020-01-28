// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

function printString(string) {
  setTimeout(()=> {
    console.log(string);
  }, Math.floor((Math.random()*100)+1));
  
}

function printAll() {
  printString("A");
  printString("B");
  printString("C");
  printString("D");
}