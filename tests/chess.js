'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});
	
	QUnit.test('Аргумент должен быть целым числом', function (assert) {
		assert.throws(() => chess("abc"), TypeError('Некорректный входной параметр функции chess'));
	});

	QUnit.test('Дробный аргумент недопустим', function (assert) {
		assert.throws(() => chess(3.5), TypeError('Входной параметр не является целым числом'));
	});

	QUnit.test('Аргумент должен находиться в интервале [2;100]', function (assert) {
		assert.throws(() => chess(120), RangeError('Функция chess принимает на вход натуральные числа от 2 до 100'));
		assert.throws(() => chess(-5), RangeError('Функция chess принимает на вход натуральные числа от 2 до 100'));
		assert.throws(() => chess(0), TypeError('Некорректный входной параметр функции chess'));
	});

	QUnit.test('Функция без аргументов должна выбрасывать соответствующую ошибку', function (assert) {
		assert.throws(() => chess(), TypeError('Некорректный входной параметр функции chess'));
	});

	QUnit.test('Аргументы +Infinity, -Infinity должны корректно обрабатываться', function (assert) {
		assert.throws(() => chess(+Infinity), TypeError('Некорректный входной параметр функции chess'));
		assert.throws(() => chess(-Infinity), TypeError('Некорректный входной параметр функции chess'));
	});

	QUnit.test('Аргументы NaN, null, undefined должны корректно обрабатываться', function (assert) {
		assert.throws(() => chess(NaN), TypeError('Некорректный входной параметр функции chess'));
		assert.throws(() => chess(null), TypeError('Некорректный входной параметр функции chess'));
		assert.throws(() => chess(undefined), TypeError('Некорректный входной параметр функции chess'));
	});

});
