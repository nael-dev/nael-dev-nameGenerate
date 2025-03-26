import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let pronoum = ['the', 'our'];
let adj = ['great', 'big'];
let noum = ['jogger', 'racoon'];
let extensions = [".com", ".es", ".net"];



const joinWords2 = () => {
  let dominios = [];
  for (let e in pronoum) {
    for (let i in adj) {
      for (let a in noum) {
        for (let ext in extensions) {
          let dominio = pronoum[e] + adj[i] + noum[a] + extensions[ext];
          dominios.push(dominio);
        }
      }
    }
  }
  return dominios.join('\n');
}








/*const joinWords = () => {
  let dominios = [];
  for (let i = 0; i < pronoum.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noum.length; k++) {
        for (let m = 0; m < extensions.length; m++) {
          let dominio = pronoum[i] + adj[j] + noum[k] + extensions[m];
          dominios.push(dominio);



        }

      }

    }

  }
 

  return dominios.join('\n');

}
  */

window.onload = function () {
  //write your code here

  document.getElementById("change").innerHTML = joinWords2('\n');
  //console.log(joinWords());
  console.log(joinWords2());
};
