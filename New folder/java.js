function hello(){
    var myString = '';
    for (var i of arguments){
        myString += `${i} - `
    }
    console.log(myString)
}
hello(1, 2, 3)