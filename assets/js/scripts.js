// const text="hello world"
// const result=[];
// for(let i=0;i<text.length;i++){
//     console.log(text[i]);
//     result.push(text[i]);
// }
// console.log(result);
const text = "hello world";
const result = [];
let word = "";

for (let i = 0; i < text.length; i++) {
  if (text[i] !== " ") {
    word += text[i]; 
  } else {
    if (word.length > 0) {
      result.push(word); 
      word = ""; // reset
    }
  }
}

if (word.length > 0) {
  result.push(word);
}

console.log(result);

https://discord.gg/G8sXGVUC5h