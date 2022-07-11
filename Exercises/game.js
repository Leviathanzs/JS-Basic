var repeat = true;
while(repeat) {
    //computer
    //var p = prompt('Tebak angka 1-10');
    var com = Math.floor((Math.random() * 10) + 1);
    var p =  parseInt(prompt('Tebak angka 1-10'));
    
    //rules
    var hasil = '';
    if(com == p) {
        hasil = 'Benar!';
    } else if(p > com) {
        hasil = 'Terlalu besar';
    } else if(p < com) {
        hasil = 'Terlalu kecil';
    } else {
        hasil = 'Masukkan angka!';
    }

    alert('Tebakan anda: ' + p + ' ' + hasil);
    repeat = confirm('Tebak lagi?');
}
console.log(com);
alert('Terimakasih telah bermain!');