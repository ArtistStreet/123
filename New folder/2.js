// var getRequestBodyFromValues  = [
//     { field: 'name', value: 'Sơn Đặng' },
// ]
// // for (var value of Object.keys(a)){
// //     console.log(a[value])
// // }
// // a.forEach(function(value){
// //     if (typeof value === 'string'){
// //         console.log(value)
// //     }
// //     return value
// // })
// function getRequestBodyFromValues(formValues) {
//     var myObject = {};
//     for (var i in formValues) {
//       var o = formValues[i];
//       myObject[o.field] = o.value;
//     }
//     return myObject;

//   }



// var a = [1, 2, 3]
// for ( i in a){
//     console.log(a[i]);
//     if (a[i] > 1){
//         return true
//     } else {
//         return false
//     }
// }
// var getRequestBodyFromValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
//     // ...
// ]
// function getRequestBodyFromValues(formValues) {
//     var myObject = {};
//     for (var i in formValues) {
//       var o = formValues[i];
//       myObject[o.field] = o.value;
//     }
//     (getRequestBodyFromValues(formValues));
//     return myObject;
    
//   }

// function checkPositiveNumbers(numbers) {

//     var Check = numbers.every(function(X){
//              return X > 0 ;
//          })
//          return Check ;
//  }
// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.push('helelo');

// console.log(animals);

// var getRequestBodyFromValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
//     // ...
// ]

// function getRequestBodyFromValues(formValues) {
//     var formValue = {}; 
//      formValues.forEach(function(key){
//         return formValue[key.field] = key.value;
//     })
//     return formValue;
// }
// getRequestBodyFromValues(formValues)
// var array1 = [1, 2, 6, 8];
// var array2 = [2, 3, 4, 5, 6, 7, 8];
// function findEqualValues(array1, array2){
//     var a = [];
//     array1.filter(function(value){
//         if(array2.includes(value)){
//             a.push(value);
//         }
//     })
//     return a
// }
// console.log(findEqualValues(array1, array2));
// findEqualValues(array1, array2);
// function findStringsInArrayByKeyword(keyword, strings) {
//     var a = strings.filter(function(value){
//         return value.includes(keyword);
//     })
//     return a
// }
// function checkPositiveNumbers(numbers) {
//     var a = numbers.every(function(value){
//         return value > 0;
//     })
//     return a
// }

// function hasFreeCourses(courses) {

//     var a = courses.some(function(value){
//         return value.vnd === 0;
//     })
//     return a

// }
// function findAMonsterByAttack(monsters) {
    
//     var a = monsters.find(function(value){
//         return value.attack === 150;
//     })
//     return undefined ? null : a
// }
// function findStringsInArrayByKeyword(keyword, strings) {

//     var a = strings.filter(function(value){
//         return value.includes(keyword);
//     })  
//     return a

// }
// function findEqualValues (array1, array2) {
//     var a = [];
//     array1.filter(function(value){
//         if(array2.includes(value)){
//             a.push(value);
//         }
//     })
//     return a
// }
// var needle = 'Javascript';
// var haystack = 'Học Javascript tại F8';
// function stringInString(needle, haystack) {
//     if (haystack.indexOf(needle)!=-1) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function getRectArea(width, height) {
//     if (width > 0 && height > 0) {
//       return width * height;
//     }
//     return 0;
//   }
  
// var width = 2;
// var height = 1;
// console.log(getRectArea(width, height))
// var languages = 'Javascript'
    

for(var i in languages) {
    console.log(languages.charAt(i))
}