// alert('hi'); /*mở pop-up khi load trang*/


// console.log('hi');
// console.error('hi');
// console.warn('hi'); /*console */


// confirm('hi') /*mở pop-up có nút cancel*/


// prompt('hi') /*mở pop-up có input*/


// setTimeout(function(){
//     alert('hi')
// }, 1000 /*miles giây*/)


// setInterval(function(){
//     console.log('hi' + Math.random());
// }, 1000) /*chạy liên tục*/


// var a = 1 + 2;
// console.log(a) /*toán tử cớ bản*/


// var a = 1;
// a++; /*hoặc a--*/
// console.log(a) /*toán tử cơ bản*/

// var a = 3;
// var b = a-- - a++ ;/* a = 3, --3 = 2*/
// console.log(b)


// var a = 1;
// var b = 2;
// if (a == b){
//     alert('dung')
// } /*so sánh*/


// var a = 1;
// var b = 2;
// if (a > 0 && b > 0){
//     alert('dung')
// } /*logic*/


// pop /*xóa phần tử cuối mảng và trả lại phần tử đã xóa*/
// push /*thêm phần tử vào cuối mảng và trả lại độ dài mới */
// shift /*xóa phần tử đầu mảng và trả lại phần tử đã xóa*/
// unshift /*thêm phần tử vào đầu mảng và trả lại độ dài */
// splice(1, 0, '') /*thêm, xóa */
// concat /*nối 2 array */
// slice /*cắt*/



// for (var i=1; i<=10; i++){
//     console.log(i)
// }
// var a = [
//     hello='hello',
//     hi='hi',
// ]
// var a = 'hello'
// var b = a.length;
// for (var i= 0; i < b; i++){
//     console.log(a[i])
// }
// var a = {
//     hello:'hello',
//     hi:'hi',
// };
// for (var i in a){
//     console.log(a[i])
// }
// var i = 0;
// var b = false
// do {
//     i++;
//     console.log(i)
//     if(true){
//         b = true
//     }
// } while(!b && i < 3);

// for (var i = 0; i < 10; i++){
    
//     if (i == 5){
//         break
//     }
//     console.log(i)
// }

// var a = [
//     [1, 2],
//     [3, 4],
// ]
// for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < a[i].length; j++) {
//         console.log(a[i][j])
//     }
// }

// var a = [
//     {
//         e : 1
//     },
//     {
//         e : 2
//     },
//     {
//         e : 3,
//         name: 'hello'
//     } 
// ]
// a.forEach(function(b){//duyệt từng phần tử
//     console.log(b)
// })
// a.every(function(b){
//     return b === 0;
// })
// console.log(b)

// var b = a.find(function(b){ //find tìm và trả về 1 giá trị; filter trả về tất cả 
//     return b.name === 'hello';
// })
// console.log(b)
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf(1));

// var isSuccess = false;

// var i = 0;

// var yourAccount = {
//     yourAccountName: 'abc',
//     yourPass: 'xyz'
// }


// function checkAccount(name, pass) 
//    {    
//     if (name === yourAccount.yourAccountName && pass === yourAccount.yourPass) {
//         isSuccess = true;
//     }
//        do {
//         i++;
//         if (isSuccess)
//         {console.log ('Ban da dang nhap thanh cong')}
//         else 
//         console.log('Sai tai khoan hoac mat khau lan: ' + i);
//     } while (!isSuccess && i < 3 )
// }
// checkAccount('abc', 'xyz')



// var number = 1;

// switch (number) {
//     case 0:
//     console.log('Sunday')
//     break
//     case 1:
//     console.log('Monday')
//     break
//     case 2:
//     console.log('Tuesday')
//     break
//     case 3:
//     console.log('Wednesday')
//     break
//     case 4:
//     console.log('Thursday')
//     break
//     case 5:
//     console.log('Friday')
//     break
//     case 6:
//     console.log('Saturday')
//     break

// }
// let mangViDu = [10, 0, 1, 2, 3, 30, 20];

// // Sắp xếp với hàm so sánh và sort()
// mangViDu.sort((a, b) => {
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

// console.log(mangViDu);
// a = 3; b = 2; c= 9; d= -1;
// function run(a, b, c, d){
// 	var sorted_str = "";
		
// var e = [1, 3, 2, 4];
// e.sort(function(a,b){
// 	if(a>b){
// 		return 1
// 	}else if(a<b){
// 		return -1
// 	}
// 	else{
// 		return 0
// 	}
// })
// sorted_str = e.join(',')
// console.log(sorted_str);

// console.log(run(a, b, c, d));
// var n = 3
// function run(n){
// 	var factorial = 1;
		
// 	for (var i = n; i > 0; i--){
// 		factorial *= i
// 	} 
// 	console.log(factorial);
// }

// run(n)
// var n = 6
// function run(n){
// 	var output = "";
// 	var i = 0
// 	while( i++ < n) {
// 		if(i%2==0){
// 			console.log(i)
// 		}
		
// 	}
	
// 	console.log(output.join(','));
// }
// run(n)
// function run(){
// 	var person = {
// 		name: "Tuan Phong",
// 		age: 1,
// 		addr: "Ha Noi",
// 		is_boy: true
// 	};
// 	for (var i in person) {
// 		console.log(i+ ' is ' +person[i]);
// 	}
// }
// run()
// str_input = "program";
// function run(str_input) {
// 	return str_input.split('').reverse().join('');
// }
// console.log(run(str_input) )

// datas = [1, 3 , 4 , 6 , 12, 5, 4 , 9]
// function run(datas){
// 	for (var i in datas) {
// 		if(datas[i] % 4 == 0 && datas[i] % 3 == 0){
// 			break;
// 		}
// 		if(datas[i] % 4 ==0){
// 			continue;
// 		}
		
// 		console.log(datas[i]);
// 	} 
// }
// run(datas)
// var datas = [1,2,4,-1]
// function run(datas){
//   ans = 0;
//   for (var i of datas) {
//     if (i > 0){
//       ans += i;
//     }
//   }   
//   console.log(ans);
// }
// run(datas)

// data = [1, 2, 3, 4, 5];
// function a(b){
//   return b % 2 == 0
// }

// function run(data) {
// 	var c = data.every(a);
// 	if (c == true){
//     console.log("Yes");
//   } 
// 	 else {
// 		console.log("No");
// 	}
// }
// run(data)
// data = [1, 2, 3, 4, 5, -1];
// function a(b){
// 	return b > 0;
// }

// function run(data) {

// 	var c = data.filter(a);

// 	console.log(c);
// }
// run(data)


// data = [-1, -2, -5, 1];
// function a(b){
//     return b > 0;
// }
// function run (data) {
// 	var c = data.find(a);
// 	var d = data.findIndex(a);
// 	// if (c == true) {
//     //     console.log(c);
//     //     console.log(d);
//     // }
//     // else{
//     //     console.log('not found');
//     // }
//     if(c == undefined){
//         console.log('not found');
//     }
//     else{
//         console.log(d, c);
        
        
//     }

// }

// run (data)
// data = [1, 5, 30, 26];
// function run(data) {
// 	data.forEach(function(element) {
// 		if(element%5==0){
//             console.log(element);
//         }
// 	});
// }
// run(data)

// data = [1, 2, 3, 4, 6];
// function run(data) {
// 	var a = data.includes(5);
//     if (a == true){
//         console.log('Yes')
//     }else{
//         console.log('No')
//     }
	
// }


// data = [2, -1, -8];

// function a(b){
//     if (b<0){
//         return b  *= -1
//     }else{
//         return b
//     }
    
// }
// function run(data) {
// 	var c = data.map(a)
// 	console.log(c)
// }
// run(data)

// data = ['A', 'B', 'C']

// function run(data) {
// 	data.shift()
// 	data.pop()
// 	data.push('X')
// 	console.log(data)
// }run(data)

// data = [1, 5, 2, 6, 8];
// function a(b, c){
//     if(a> b){
//         return b
//     }
// }

// function run(data) {
// 	var a = data.sort(a)
// 	console.log(a)
// }
// run(data)


// n = -3.32333;
// function run(n) {
// 	var check = Number.isInteger(n>0);
// 	console.log(check)
// }
// run(n)
// a = 1; b = 2;
// function run(a, b) {
//     console.log((a/b).toFixed(2));
// }
// run(a, b)
// n = 1;


// function run(n){  
//     if(Number.isFinite(n)){
        
//     }
// }
// run(n)
// var name = "JavaScriptJavaScript"
// function a(name) {
//     if(name.length>10){
//         return true
//     }else{
//         return false
//     }
// }


// function run(name) {
// 	var result = name.is_big();
// 	console.log(result);
// }
// run(name)


// str = "this is test"
// function ucfirst(str) {
// 	var first_letter  = str.charAt(0)
// 	var rest  = str.slice(1)
	
// 	console.log(first_letter.toUpperCase().concat(rest))


// }

// ucfirst(str)

// var a = str.slice(0, 1)
// var b = str.charAt(0)
// a.toUpperCase()
// console.log(a)
// console.log(b)
// word = "t t h i"
// function  uc_first(word) {
// 	var a = word.split(' ')

// for(var i = 0; i< a.length; i++){
//     a[i] = a[i][0].toUpperCase() + a[i].slice(1);
//  }
//  return a.join(" ");
// }

// let result = uc_first('hà nội việt nam');
// console.log(result)
// function  uc_first(word) {
// 	var str = word.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     }
//     console.log(str.join(' '));
// }

// uc_first(word)
// function run(name, year_of_birth) {
// 	var d = new Date();
// 	var current_year = d.getFullYear();

	
	
// 	console.log();
// 	console.log( + " is " +  + " years old");
// }


