import Validator from '../validator.js';

test('test 4 numbers', () => {
  const v = new Validator();
  const res = v.validateUsername('abcd34wvb_1234vb345-a');
  expect(res).toBe(false);
});

test('test up to 3 numbers', () => {
  const v = new Validator();
  const res = v.validateUsername('abcd34wvb_123vb345-a');
  expect(res).toBe(true);
});

test('test first _', () => {
  const v = new Validator();
  const res = v.validateUsername('_abcd34wvb_123vb345-a');
  expect(res).toBe(false);
});

test('test first digit', () => {
  const v = new Validator();
  const res = v.validateUsername('1_abcd34wvb_123vb345-a');
  expect(res).toBe(false);
});

test('test first -', () => {
  const v = new Validator();
  const res = v.validateUsername('-abcd34wvb_123vb345-a');
  expect(res).toBe(false);
});

test('test ?', () => {
  const v = new Validator();
  const res = v.validateUsername('abcd?34wvb_123vb345-a');
  expect(res).toBe(false);
});

test('not latin symbol', () => {
  const v = new Validator();
  const res = v.validateUsername('aзbcd?34wvb_123vb345-a');
  expect(res).toBe(false);
});

test('test last _', () => {
  const v = new Validator();
  const res = v.validateUsername('_abcd34wvb_123vb345_');
  expect(res).toBe(false);
});

test('test last -', () => {
  const v = new Validator();
  const res = v.validateUsername('_abcd34wvb_123vb345-');
  expect(res).toBe(false);
});

test('test last digit', () => {
  const v = new Validator();
  const res = v.validateUsername('_abcd34wvb_123vb345');
  expect(res).toBe(false);
});
