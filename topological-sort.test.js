import topologicalSort from './topological-sort';

test('test1', () => {
  const vertices = 4;
  const edges = [
    [3, 2],
    [3, 0],
    [2, 0],
    [2, 1],
  ];
  const result = topologicalSort(vertices, edges);
  const expected = [
    [3, 2, 0, 1],
    [3, 2, 1, 0],
  ];
  expect(expected).toContainEqual(result);
});

test('test2', () => {
  const vertices = 5;
  const edges = [
    [4, 2],
    [4, 3],
    [2, 0],
    [2, 1],
    [3, 1],
  ];
  const result = topologicalSort(vertices, edges);
  const expected = [
    [4, 2, 3, 0, 1],
    [4, 3, 2, 0, 1],
    [4, 3, 2, 1, 0],
    [4, 2, 3, 1, 0],
    [4, 2, 0, 3, 1],
  ];
  expect(expected).toContainEqual(result);
});

test('test3', () => {
  const vertices = 7;
  const edges = [
    [6, 4],
    [6, 2],
    [5, 3],
    [5, 4],
    [3, 0],
    [3, 1],
    [3, 2],
    [4, 1],
  ];
  const result = topologicalSort(vertices, edges);
  const expected = [
    [5, 6, 3, 4, 0, 1, 2],
    [6, 5, 3, 4, 0, 1, 2],
    [5, 6, 4, 3, 0, 2, 1],
    [6, 5, 4, 3, 0, 1, 2],
    [5, 6, 3, 4, 0, 2, 1],
    [5, 6, 3, 4, 1, 2, 0],
    [6, 5, 4, 3, 2, 1, 0],
  ];
  expect(expected).toContainEqual(result);
});
