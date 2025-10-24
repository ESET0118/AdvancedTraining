using LibraryManagementAPI.Models.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using LibraryManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBooksRepository _booksRepository;

        public BookController(IBooksRepository booksRepository)
        {
            _booksRepository = booksRepository;
        }

        [HttpGet("getBooks")]
        public Task<IEnumerable<Book>> getBooks()
        {
            return _booksRepository.GetAll();
        }

        [HttpPost("addBooks")]
        public void addBook([FromBody] Book book)
        {
            _booksRepository.addBook(book);
        }

        [HttpDelete("deleteBook")]
        public void deleteBook(int id)
        {
            _booksRepository.deleteBook(id);
        }



    }
}
