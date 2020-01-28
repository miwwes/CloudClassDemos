// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
// We first created printstring with print all
// then we created callback
// lastly we created promises
function printString(string) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
    console.log(string);
    resolve();
    // callback();
  }, Math.floor((Math.random()*100)+1));
  });
  
}
printAll();
// easiest way to do void functions? 
function printAll(){
  printString("A").then(()=>printString("B")).then(()=>printString("C")).then(()=>{printString("D")});
  // printString("A", ()=> {
  //   printString("B", ()=> {
  //     printString("C", ()=> {
  //       // void function for d 
  //       printString("D", ()=> {});
  //     });
  //   });
}
  // only use ({}); for function within function callbacks paramater 
  //not just a "void" parameter
  
  
