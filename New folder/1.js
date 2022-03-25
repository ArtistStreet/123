// var user = function (firstname, lastName){
//     this.firstname = firstname;
//     this.lastName = lastName;
    
//     this.getName = function(){
//         return `${this.firstname} ${this.lastName}`
//     }
// }

// user.prototype.className = 'hello'

// var author = new user("Han", 'Dang');
// var user = new user('Dang', 'Han');
// console.log(author.getName());
// console.log(user.getName());
// console.log(user.className)


n = 5
function run(n){
	var i = -1;
	do {		
		i++
	} while (n%2==0)
	
	console.log(i);
}
run(n)