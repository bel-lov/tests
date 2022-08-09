import {calculateLife} from '../app.js'

// test ('basik test', ()=>{
//     let result = 4;
//     expect(result).toBe(4);
// });

test('calculateLifeGreen', () => {
    const person = {
        name: 'Маг',
        health: 90
    };
    const result = calculateLife(person);
    expect(result).toBe('green');
})
test('calculateLifeYellow', () => {
    const person = {
        name: 'Маг',
        health: 40
    };
    const result = calculateLife(person);
    expect(result).toBe('yellow');
})
test('calculateLifeRed', () => {
    const person = {
        name: 'Маг',
        health: 10
    };
    const result = calculateLife(person);
    expect(result).toBe('red');
})