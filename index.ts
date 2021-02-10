/* Write a function to check whether the given value is leap year or not
function parameter should accept only number values
function must have return type of boolean value
 */

let leapYear= (year:number):boolean => {

    if((year%4 ==0) && (year%100 != 0) || (year%400==0))
     {
         return true;
     }
     else {
         return false;
     }
}

console.log(leapYear(2018));

/* Write a function to reverse the given string
function parameter should accept only string values
function must have return type of string
 */


 let reverseString= (str:string):string=> {

    return str.split("").reverse().join("");

}

console.log(reverseString("MYILVAGANAN"));