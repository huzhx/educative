import printOrders from './all-tasks-scheduling-orders';

test('test1', () => {
  const tasks = 3;
  const prerequisites = [
    [0, 1],
    [1, 2],
  ];
  const expected = [[0, 1, 2]];
  const result = printOrders(tasks, prerequisites);
  expect(expected.sort()).toEqual(result.sort());
});

test('test2', () => {
  const tasks = 4;
  const prerequisites = [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ];
  const expected = [
    [3, 2, 0, 1],
    [3, 2, 1, 0],
  ];
  const result = printOrders(tasks, prerequisites);
  expect(expected.sort()).toEqual(result.sort());
});

test('test3', () => {
  const tasks = 6;
  const prerequisites = [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ];
  const expected = [
    [0, 1, 4, 3, 2, 5],
    [0, 1, 3, 4, 2, 5],
    [0, 1, 3, 2, 4, 5],
    [0, 1, 3, 2, 5, 4],
    [1, 0, 3, 4, 2, 5],
    [1, 0, 3, 2, 4, 5],
    [1, 0, 3, 2, 5, 4],
    [1, 0, 4, 3, 2, 5],
    [1, 3, 0, 2, 4, 5],
    [1, 3, 0, 2, 5, 4],
    [1, 3, 0, 4, 2, 5],
    [1, 3, 2, 0, 5, 4],
    [1, 3, 2, 0, 4, 5],
  ];
  const result = printOrders(tasks, prerequisites);
  expect(expected.sort()).toEqual(result.sort());
});
