module.exports = function zeros(expression) {
  var arr_str = expression.split('*');
  var str = '';
  var arr = new Array;
   var n = 0;
   var y = 0;
  var r={n,y};
  var arr_chang;
  var s = 1;
  let temp = r;
 
  for (var i = 0; i < arr_str.length; i++) {
    if (arr_str[i][arr_str[i].length - 1] == '!' && arr_str[i][arr_str[i].length - 2] != "!") {
      // console.log(zero_1(eval(arr_str[i].substr(0, arr_str[i].length - 1))))
        temp = zero_1(eval(arr_str[i].substr(0, arr_str[i].length - 1)));
        r.n +=temp.n;
        r.y +=temp.y;
    }
    else if (arr_str[i][arr_str[i].length - 1] == '!' && arr_str[i][arr_str[i].length - 2] == "!") {

      if (eval(arr_str[i].substr(0, arr_str[i].length - 2)) % 2 == 0){
temp = zero_2_c(eval(arr_str[i].substr(0, arr_str[i].length - 2)));
r.n += temp.n;
        r.y += temp.y;
        //  console.log(r.y)
      }else { temp = zero_2(eval(arr_str[i].substr(0, arr_str[i].length - 2)));
      // console.log(i + 'lol')
      r.n +=temp.n;
        r.y +=temp.y;
        //  console.log(r.y)
      }
    }
  }
  if(r.n>r.y){
    return r.y;
  }else if(r.n<r.y){
    return r.n;
  }else return r.n;
}

function zero_1(z){
 var t = 0;
  n=0;
  y=0;
 u ={n,y};
  for (var i = 1; i<=z;i++){
    t = i;
    for(t; t % 2==0 || t % 5 == 0;){
    if(t % 2 == 0){
      u.n++;
      t = t/2;
    }
      else if (t % 5 == 0){
u.y++;
t = t/5;
      }
    }
    }
    return u;
  }

  function zero_2(z){
    var t = 0;
n=0;
  y=0;
 u ={n,y};
  for (var i = 1; i<=z;i+=2){
    t = i;
    for(t; t % 2==0 || t % 5 == 0;){
    if(t % 2 == 0){
      u.n++;
      t = t/2;
    }
      else if (t % 5 == 0){
u.y++;
t = t/5;
      }
    }
    }
    return u;
  }

  function zero_2_c(z){
     var t = 0;
n=0;
  y=0;
 u ={n,y};
  for (var i = 2; i<=z;i+=2){
    t = i;
    for(t; t % 2==0 || t % 5 == 0;){
    if(t % 2 == 0){
      u.n++;
      t = t/2;
    }
      else if (t % 5 == 0){
u.y++;
t = t/5;
      }
    }
    }
    return u;
  }
















// module.exports = function zeros(expression) {
//   var arr_str = expression.split('*');
//   var str = '';
//   var arr = new Array;
//   var r = 0;
//   var arr_chang;
//   var s = 1;
//   var n = 0;
//   var y = 0;
//   for (var i = 0; i < arr_str.length; i++) {
//     if (arr_str[i][arr_str[i].length - 1] == '!' && arr_str[i][arr_str[i].length - 2] != "!") {
//       if (eval(arr_str[i].substr(0, arr_str[i].length - 1)) >= 5) {
//         for (var j = 0; j <= eval(arr_str[i].substr(0, arr_str[i].length - 1)) / 5 - 1; j++) {
//           str = str + '0';
//         } if (eval(arr_str[i].substr(0, arr_str[i].length - 1)) >= 25) {
//           for (var q = 0; q <= eval(arr_str[i].substr(0, arr_str[i].length - 1)) / 25 - 1; q++) {
//             str = str + '0';
//           }
//         }
//         arr[r] = str;
//         r++;
//         str = '';
//       } else {
//         arr[r] = str;
//         r++;
//       }
//     }
//     else if (arr_str[i][arr_str[i].length - 1] == '!' && arr_str[i][arr_str[i].length - 2] == "!") {
//       if (eval(arr_str[i].substr(0, arr_str[i].length - 2)) % 2 == 0){
//         if (eval(arr_str[i].substr(0, arr_str[i].length - 2)) > 10 && eval(arr_str[i].substr(0, arr_str[i].length - 2)) % 2 == 0) {
//           for (var j = 0; j != eval(arr_str[i].substr(0, arr_str[i].length - 1)) / 10; j++) {
//             str = str + '0';
//           }
//           arr[r] = str;
//           r++;
//           str = '';
//         } else {
//           arr[r] = str;
//           r++;
//         }
//       }
//     }
//   }
//   for (var i = 0; i < arr_str.length; i++) {
//     n += arr[i].length;
//   }
//   return n;
// }

// var lol = zeros('26!')
// console.log(lol);



























//function zeros(expression) {
//   var arr_str = expression.split('*');
//   var str='';
//   var arr=new Array;
//   var r=0;
//   var str_rev ='';
//   var arr_change
//   var o=0;
//   var s =1;
//   var n=0;
//   var y=0;
//     for (var i = 0; i < arr_str.length; i++){
//       // if (expression[i]=='*'){
//       //   arr[r]='*';
//       //   r++;
//       // }
//          if (arr_str[i][arr_str[i].length-1]=='!' && arr_str[i][arr_str[i].length-2] != "!"){
//            str = String(factorial(eval(arr_str[i].substr(0,arr_str[i].length-1))));
//             str_rev=str.split('').reverse();
//             for(var q=0;q < str_rev.length; q++){
//               if (str_rev[q] != '0'){
//                    o++;
//                    break;
//               }else o++;
//             }
//             arr[r]=str.substr(str.length-o,o);
//             r++;
//             str ='';
//             str_rev='';
//             o=0;
//          }
//          else if (arr_str[i][arr_str[i].length-1]=='!' && arr_str[i][arr_str[i].length-2] == "!"){
//            str = String(factorial_2(eval(arr_str[i].substr(0,arr_str[i].length-2))));
//             str_rev=str.split('').reverse();
//             for(var q=0;q < str_rev.length; q++){
//               if (str_rev[q] != '0'){
//                    o++;
//                    break;
//               }else o++;
//             }
//             arr[r]=str.substr(str.length-o,o);
//             r++;
//             str ='';
//             str_rev='';
//             o=0;
//          }
//     }
//      for(var i = 0; i < arr_str.length; i++){
//       n += arr[i].length-1;
//       if(arr[i][0] != '0'){
//         s*=arr[i][0];
//       }
//     }
//     if (s!=1){
//       y = String(s);
//         return n + y.length-1;
//       }else return n;


//   }

//   function factorial(n){
//   if(n==1){
//     return String(n);
//   }
//     return String(eval(n) * factorial(n-1));
//   }

//   function factorial_2(n){
//   if(n == 2){
//     return String(eval(n));
//   }
//   else if (n == 1){
//     return String(eval(n));
//   }

//     return String(eval(n) * factorial_2(n-2));
//   }



//нули ('5! * 7! * 6 !! * 7 !!') 5! === 1 * 2 * 3 * 4 * 5 10 !! === 2 * 4 * 6 * 8 * 10 7 !! === 1 * 3 * 5 * 7