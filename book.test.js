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

    test('it should return an object {isValid: true, invalidFields: []}', () => {
        assert.deepEqual(Book.validateBook(validBook), {
            isValid: true,
            invalidFields: []
        })
    })

    test('it should return an object {isValid: false, invalidFields: a list contains invalidFields}', () => {
        const invalid
        assert.deepEqual(Book.validateBook({}))
    })
})