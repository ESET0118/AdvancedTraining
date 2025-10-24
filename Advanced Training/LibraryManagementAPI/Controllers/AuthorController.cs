using LibraryManagementAPI.Models;
using LibraryManagementAPI.Models.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorRepository _authorRepository;
        public AuthorController(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        [HttpGet("getAuthors")]
        public Task<IEnumerable<Author>> getAuthors()
        {
            return _authorRepository.GetAll();
        }

        [HttpPost("addAuthors")]
        public void addAuthor([FromBody] Author author)
        { 
            _authorRepository.addAuthor(author);
        }

        [HttpDelete("deleteAuthor")]
        public void deleteAuthor(int id)
        {
            _authorRepository.deleteAuthor(id);
        }



    }
}
