import canSchedule from './tasks-scheduling';

test('test1', () => {
  const tasks = 3;
  const prerequisites = [
    [0, 1],
    [1, 2],
  ];
  const result = canSchedule(tasks, prerequisites);
  expect(result).toBeTruthy();
});

test('test2', () => {
  const tasks = 3;
  const prerequisites = [
    [0, 1],
    [1, 2],
    [2, 0],
  ];
  const result = canSchedule(tasks, prerequisites);
  expect(result).toBeFalsy();
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
  const result = canSchedule(tasks, prerequisites);
  expect(result).toBeTruthy();
});
