var s = '';
var x = 5;

for(var h = 0; h < x ; h++){
 for(var i = 0; i < h; i++){
  s += ' ';
 }
 for(var j = x; j > h; j--){
  s += ' *';
 }
 s += '\n';   
}

console.log(s);
