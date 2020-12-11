import { readCities, getACity, } from '../index';

test('Testing Cities', async () => {
  const res = await readCities('TW', 'zh');
  expect(res.length).not.toBe(0);
});

