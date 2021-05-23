const isPow2 = (num) => {
  return num !== 0 && (num & (num - 1)) === 0;
};

export default isPow2;
