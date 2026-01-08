import { Book } from "./book.js";

export class LibraryManagement {
    static addBook(library, book) {
        const isIdExist = library.find(b => b.id == book.id);
        if (isIdExist) {
            throw new Error(`book with id ${book.id} already exist`);
        }

        const info = Book.validateBook(book);
        if (!info.isValid) {
            return info
        }

        library.push(book)
    }

    static removeBook(library, bookId) {
        const index = library.findIndex(b => b.id == bookId);
        if (index == -1) {
            throw new Error(`book with id ${bookId} not found`);
        }

        library.splice(index, 1)
    }

    static updateCopies(library, bookId, delta) {
        const index = library.findIndex(b => b.id == bookId);
        if (index == -1) {
            throw new Error(`book with id ${bookId} not found`);
        }

        const newNumCopies = library[index].copies + delta;
        if (newNumCopies < 0) {
            throw new Error("Not enough copies");
        }

        library[index].copies = newNumCopies;
    }

    static getLowCopyBooks(library) {
        const lowStockBooks = library.filter(book => book.copies < book.minCopies && book.minCopies > 0);
        const sortedByUrgency = lowStockBooks.toSorted((a, b) => {
            const aUrgency = a.copies / a.minCopies;
            const bUrgency = b.copies / b.minCopies;

            return aUrgency - bUrgency
        })

        return sortedByUrgency
    }
}