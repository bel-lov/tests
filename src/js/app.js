export function calculateLife(lifes) {
  if (lifes.health > 50) {
    return 'green';
  }
  if (lifes.health < 50 && lifes.health > 15) {
    return 'yellow';
  }
  if (lifes.health < 15) {
    return 'red';
  }
}
