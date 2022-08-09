export function calculateLife(lifes) {
    if (lifes.health > 50) {
        return 'green';
    }
    else if (lifes.health < 50 && lifes.health > 15) {
        return 'yellow';
    }
    else if (lifes.health < 15) {
        return 'red';
    }
}

// TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));
