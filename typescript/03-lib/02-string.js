var str = new String("RUNOOB");
console.log("str.charAt(0) 为:" + str.charAt(0)); // R
console.log("str.charAt(1) 为:" + str.charAt(1)); // U
console.log("str.charAt(2) 为:" + str.charAt(2)); // N
console.log("str.charAt(3) 为:" + str.charAt(3)); // O
console.log("str.charAt(4) 为:" + str.charAt(4)); // O
console.log("str.charAt(5) 为:" + str.charAt(5)); // B
var str1 = new String("RUNOOB");
var str2 = new String("GOOGLE");
// @ts-ignore
var str3 = str1.concat(str2);
console.log("str1 + str2 : " + str3); // RUNOOBGOOGLE
var str4 = "RUNOOB GOOGLE TAOBAO FACEBOOK";
console.log("(1,2): " + str4.substring(1, 2)); // U
console.log("(0,10): " + str4.substring(0, 10)); // RUNOOB GOO
console.log("(5): " + str4.substring(5)); // B GOOGLE TAOBAO FACEBOOK
var str5 = "Apples are round, and apples are juicy.";
var splitted = str5.split(" ", 3);
console.log(splitted); // [ 'Apples', 'are', 'round,' ]
var str6 = "Runoob";
console.log(str6.toString()); // Runoob
var str7 = new String("Runoob");
console.log(str7.valueOf()); // Runoob
