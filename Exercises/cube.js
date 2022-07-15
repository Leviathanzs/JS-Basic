function cubeVolumeTotal(sisi1, sisi2) {
    
    volume1 = sisi1 * sisi1 * sisi1;
    volume2 = sisi2 * sisi2 * sisi2;

    total = volume1 + volume2
    return total;
}

console.log(cubeVolumeTotal(4,3));