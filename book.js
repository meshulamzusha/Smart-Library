export class Book {

    static validateBook(book) {

        const invalidFields = [];
        let isValid = true;

        if (!book.id || typeof book.id !== 'string') {
            invalidFields.push('id');
            isValid = false;
        }

        if (!book.title || typeof book.title !== 'string') {
            invalidFields.push('title');
            isValid = false;
        }

        if (!book.category || typeof book.category !== 'string') {
            invalidFields.push('category');
            isValid = false;
        }

        if (book.copies === undefined || typeof book.copies != 'number' || book.copies < 0) {
            invalidFields.push('copies');
            isValid = false;
        }

        if (
            book.minCopies === undefined ||
            typeof book.minCopies != 'number' ||
            book.minCopies < 0
        ) {
            invalidFields.push('minCopies');
            isValid = false;
        }

        const regex = /^\d{4}-\d{2}-\d{2}$/;
        const isValidDate = regex.test(book.expiresAt);

        if (!book.expiresAt || (!isValidDate && book.expiresAt !== null)) {
            invalidFields.push('expiresAt');
            isValid = false;
        }

        return { isValid: isValid, invalidFields: invalidFields };
    }
}