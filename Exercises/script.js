var s = '';
var b = 3;

for(var h = 1; h <= b; h++){
 for(var i = 1; i <= b - h; i++){
  s += ' ';
 }
 for(var j = 1; j < 2 * h; j++){
  s += '*';
 }
 s += '\n';   
}

console.log(s);

// Alur Kerja for : cek kondisi pertama jika true masuk ke for bawahnya,
// for-2 dijalankan hingga false, kemudian lanjut for-3
// for-3 dikerjakan hingga false, kemudian kerjakan kondisi for-1, 
//jika for-1 true dan telah dijalankan \n, kemudian jalankan fungsin sebelum \n dimana for-1 kemudian for-2,
// for-2 dan 3 dijalankan lagi dengan increasmentnya di reset ke default
