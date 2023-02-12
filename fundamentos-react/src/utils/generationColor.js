const generateColorCardAleatory = () => {
  const color = parseInt(Math.random() * 0xffffff, 10)
    .toString(16)
    .padStart(6, '0');
  return `#${color}`;
};

export default generateColorCardAleatory;
