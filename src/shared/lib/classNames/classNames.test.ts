import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one parameter', () => {
    const expected = 'someClass';
    expect(classNames('someClass')).toBe(expected);
  });

  test('with one additional class', () => {
    const expected = 'someClass class1';
    expect(classNames('someClass', {}, 'class1')).toBe(expected);
  });

  test('with many additional classes', () => {
    const expected = 'someClass class1 class2 class3';
    expect(classNames('someClass', {}, ['class1', 'class2', 'class3'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', { class1: true, class2: true })).toBe(expected);
  });

  test('with mods all false', () => {
    const expected = 'someClass';
    expect(classNames('someClass', { class1: false, class2: false })).toBe(expected);
  });

  test('with mods true and false', () => {
    const expected = 'someClass class1';
    expect(classNames('someClass', { class1: true, class2: false })).toBe(expected);
  });

  test('with mods true and undefined', () => {
    const expected = 'someClass class1';
    expect(classNames('someClass', { class1: true, class2: undefined })).toBe(expected);
  });

  test('with mods and additional class', () => {
    const expected = 'someClass class3 class1';
    expect(classNames('someClass', { class1: true, class2: false }, 'class3')).toBe(expected);
  });

  test('with mods and additional classes', () => {
    const expected = 'someClass class3 class4 class1';
    expect(classNames('someClass', { class1: true, class2: false }, ['class3', 'class4'])).toBe(expected);
  });
});
