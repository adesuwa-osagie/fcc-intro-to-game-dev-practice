import Trophy from "/src/trophy";

export function buildLevel(game, level) {
  let trophies = [];

  level.forEach((row, rowIndex) => {
    row.forEach((trophy, trophyIndex) => {
      if (trophy === 1) {
        let position = {
          x: 80 * trophyIndex,
          y: 50 + 24 * rowIndex
        };
        trophies.push(new Trophy(game, position));
      }
    });
  });

  return trophies;
}

export const level1 = [
  // [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

export const level2 = [
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
