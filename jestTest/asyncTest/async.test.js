
const fetchData = require('./async');

test('there is a data', async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);

   
  });