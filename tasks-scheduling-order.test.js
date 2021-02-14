import findTopOrder from './tasks-scheduling-order';

test('test1', () => {
  const tasks = 3;
  const prerequisites = [
    [0, 1],
    [1, 2],
  ];
  const expected = [[0, 1, 2]];
  const result = findTopOrder(tasks, prerequisites);
  expect(expected).toContainEqual(result);
});

test('test2', () => {
  const tasks = 3;
  const prerequisites = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  const expected = [];
  const result = findTopOrder(tasks, prerequisites);
  expect(result).toEqual(expected);
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
  const expected = [[0, 1, 4, 3, 2, 5]];
  const result = findTopOrder(tasks, prerequisites);
  expect(expected).toContainEqual(result);
});
