using LibraryManagementAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace LibraryManagementAPI.Models.Repository
{
    public class BooksRepository : IBooksRepository
    {
        private readonly LibraryDbContext _context;

        public BooksRepository(LibraryDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Book>> GetAll()
        {
            var book = await _context.Books.ToListAsync();
            return book;
        }
        public void addBook([FromBody] Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();
        }
        public async void deleteBook(int id)
        {
            var book = await _context.Books.FindAsync(id);
            book.Author = await _context.Authors.FindAsync(book.AuthorId);
            _context.SaveChanges();

        }

    }
}
