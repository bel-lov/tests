export default function calculateLife(lifes) {
  let color;
  if (lifes.health > 50) {
    color = 'green';
  }
  if (lifes.health < 50 && lifes.health > 15) {
    color = 'yellow';
  }
  if (lifes.health < 15) {
    color = 'red';
  }
  return color;
}
