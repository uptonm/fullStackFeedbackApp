function getRand(max) {
  return Math.floor(Math.random() * max);
}

export const data = [
      {name: '11/12', yes: getRand(20), no: getRand(20)},
      {name: '11/13', yes: getRand(20), no: getRand(20)},
      {name: '11/14', yes: getRand(20), no: getRand(20)},
      {name: '11/15', yes: getRand(20), no: getRand(20)}
];