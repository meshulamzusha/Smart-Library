import test, { describe } from 'node:test';
import assert from 'node:assert';
import { Book } from './book.js';

describe('Book.validateBook function', () => {

    const validBook = {
        id: '123',
        title: 'The Great Gatsby',
        category: 'Classic',
        copies: 5,
        minCopies: 1,
        expiresAt: '2026-12-31'
    };

    describe('valid book input', () => {
        test('it should return an object {isValid: true, invalidFields: []}', () => {
            const numbersZeroBook = { ...validBook, copies: 0, minCopies: 0 }
            assert.deepStrictEqual(Book.validateBook(validBook), {
                isValid: true,
                invalidFields: []
            })
            assert.deepStrictEqual(Book.validateBook(numbersZeroBook), {
                isValid: true,
                invalidFields: []
            })
        })
    })

    describe('invalid fields that should be string', () => {
        test("it should return an object {isValid: false, invalidFields: ['title']}", () => {
            const titleUndefinedBook = { ...validBook, title: undefined };
            const titleEmptyStringBook = { ...validBook, title: "" };
            const titleNumberBook = { ...validBook, title: 123 };
            assert.deepStrictEqual(Book.validateBook(titleUndefinedBook), {
                isValid: false,
                invalidFields: ['title']
            });
            assert.deepStrictEqual(Book.validateBook(titleEmptyStringBook), {
                isValid: false,
                invalidFields: ['title']
            });
            assert.deepStrictEqual(Book.validateBook(titleNumberBook), {
                isValid: false,
                invalidFields: ['title']
            });
        })
        test("it should return an object {isValid: false, invalidFields: ['id']}", () => {
            const idUndefinedBook = { ...validBook, id: undefined };
            const idEmptyStringBook = { ...validBook, id: "" };
            const idNumberBook = { ...validBook, id: 123 };
            assert.deepStrictEqual(Book.validateBook(idUndefinedBook), {
                isValid: false,
                invalidFields: ['id']
            });
            assert.deepStrictEqual(Book.validateBook(idEmptyStringBook), {
                isValid: false,
                invalidFields: ['id']
            });
            assert.deepStrictEqual(Book.validateBook(idNumberBook), {
                isValid: false,
                invalidFields: ['id']
            });
        })
        test("it should return an object {isValid: false, invalidFields: ['category']}", () => {
            const categoryUndefinedBook = { ...validBook, category: undefined };
            const categoryEmptyStringBook = { ...validBook, category: "" };
            const categoryNumberBook = { ...validBook, category: 123 };
            assert.deepStrictEqual(Book.validateBook(categoryUndefinedBook), {
                isValid: false,
                invalidFields: ['category']
            });
            assert.deepStrictEqual(Book.validateBook(categoryEmptyStringBook), {
                isValid: false,
                invalidFields: ['category']
            });
            assert.deepStrictEqual(Book.validateBook(categoryNumberBook), {
                isValid: false,
                invalidFields: ['category']
            });
        })
    })

    describe('invalid fields that should be number', () => {
        test("it should return an object {isValid: false, invalidFields: ['copies']}", () => {
            const undefinedCopiesBook = { ...validBook, copies: undefined };
            const negativeCopiesBook = { ...validBook, copies: -1 };
            const stringCopiesBook = { ...validBook, copies: "5" };
            assert.deepStrictEqual(Book.validateBook(undefinedCopiesBook), {
                isValid: false,
                invalidFields: ['copies']
            })
            assert.deepStrictEqual(Book.validateBook(negativeCopiesBook), {
                isValid: false,
                invalidFields: ['copies']
            })
            assert.deepStrictEqual(Book.validateBook(stringCopiesBook), {
                isValid: false,
                invalidFields: ['copies']
            })


        })
    })
    test("it should return an object {isValid: false, invalidFields: ['minCopies']}", () => {
        const undefinedMinCopiesBook = { ...validBook, minCopies: undefined };
        const negativeMinCopiesBook = { ...validBook, minCopies: -1 };
        const stringMinCopiesBook = { ...validBook, minCopies: "5" };
        assert.deepStrictEqual(Book.validateBook(undefinedMinCopiesBook), {
            isValid: false,
            invalidFields: ['minCopies']
        })
        assert.deepStrictEqual(Book.validateBook(negativeMinCopiesBook), {
            isValid: false,
            invalidFields: ['minCopies']
        })
        assert.deepStrictEqual(Book.validateBook(stringMinCopiesBook), {
            isValid: false,
            invalidFields: ['minCopies']
        })

    })
})