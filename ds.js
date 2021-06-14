// Q1)  Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.
// console.log("hello world")
// const foo = ['foo', Symbol.for('bar'), 'baz' ]
// const foobar = foo.reduce((a,b) => ({...a, [b]:undefined}), {});
// const foobaz = [...Object.keys(foobar),].join('');
// console.log(foobaz)
// function countWords(str, words,){
//     let count = 0;
//     // let counts = 0;
//     for(i=0; i<str.length; i++){
//         if(str.charAt(i) == words){
//             count +=1;
//         }
       

//     }
//     return count;
// }



let str="ttttwww wo the what is the"
split = str.split(" ");
obj ={};
for(let i = 0; i < split.length; i++){
    if(obj[split[i]] === undefined) {
        obj[split[i]] = 1;
    }else {
        obj[split[i]]++;
    }
}
console.log(obj)




//     let string="ttttwww wo the"
//     let word="t"
//     // let leter = "w"
//     console.log(countWords(string, word,))
    
// Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.
// let strin1 = "what is \n your name"
// console.log(strin1)
// let strin = String.raw`what is your \n name my name is `
// console.log(strin)


// function countWords(str) {
//     str = str.replace(/(^\s*)|(\s*$)/gi,"");
//     str = str.replace(/[ ]{2,}/gi," ");
//     str = str.replace(/\n /,"\n");
//     str = str.replace((/[^a-zA-Z]+/i),"")
    
//     return str.split(' ').length;
//  }
//  let meh = "what if i am not going to find you a new class"
//  console.log(countWords(meh))
     
// find the unique number
// starting from tomorrow compulsory
// inshalllah from tomorrow
