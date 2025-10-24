using LibraryManagementAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Models.Repository
{
    public class AuthorRepository:IAuthorRepository
    {
        private readonly LibraryDbContext _context;

        public AuthorRepository(LibraryDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Author>> GetAll()
        {
            var author = await _context.Authors.ToListAsync();
            return author;
        }
        public void addAuthor([FromBody] Author author)
        {
            _context.Authors.Add(author);
            _context.SaveChanges();
        }
        public void deleteAuthor(int id)
        {
            var author = _context.Authors.Where(b => b.AuthorID == id);
            _context.Remove(author);
            _context.SaveChanges();

        }
    }
}
