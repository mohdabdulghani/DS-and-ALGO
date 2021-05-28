// Q1)  Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.
// console.log("hello world")
// const foo = ['foo', Symbol.for('bar'), 'baz' ]
// const foobar = foo.reduce((a,b) => ({...a, [b]:undefined}), {});
// const foobaz = [...Object.keys(foobar),].join('');
// console.log(foobaz)
function countWords(str, words,){
    let count = 0;
    // let counts = 0;
    for(i=0; i<str.length; i++){
        if(str.charAt(i) == words){
            count +=1;
        }
       

    }
    return count;
}
    let string="ttttwww wo the"
    let word="t"
    // let leter = "w"
    console.log(countWords(string, word,))
    
   


     

