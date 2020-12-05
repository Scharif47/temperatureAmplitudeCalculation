'use strict';

// Task 1
// Create a Smart Home thermometer for a Company. Given an array of temperatures of one day , calculate the temperature amplitude. Sometimes there are sensor errors.


const temperatures = [2, -2, -7, -4, "error", 13, 13, 14, 11, 12, 6, 5];

// const calcTempAmplitude = function(temps) {
//     let max = temps[0];
//     let min = temps[0];
//     for(let i = 0; i < temps.length; i++){
//         const curTemp = temps[i];
//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//         if( curTemp !== "number") continue;
//     }
//     return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

// Task 2
// Function should have two array inputs

const calcTempAmplitudeNew = function(t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
        if( curTemp !== "number") continue;
    }
    return max - min;
};

console.log(calcTempAmplitudeNew([2, 7, 2], [8, 12, -3]))