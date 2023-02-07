import ArrayBufferConverter from '../app';

test('загрузка данных', () => {
  const buffer = new ArrayBufferConverter();
  const array = buffer.load();
  const result = array.length;
  const expected = 53;

  expect(result).toBe(expected);
});

test('перевод загруженного в строку', () => {
  const buffer = new ArrayBufferConverter();
  const result = buffer.toString(buffer.load());
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(result).toBe(expected);
});
