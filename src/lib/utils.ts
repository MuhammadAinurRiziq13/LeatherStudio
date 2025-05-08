export const getRandomImage = (width: number, height: number) => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://picsum.photos/seed/${randomSeed}/${width}/${height}`;
};
