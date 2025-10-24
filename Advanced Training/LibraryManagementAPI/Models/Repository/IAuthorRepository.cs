using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementAPI.Models.Repository
{
    public interface IAuthorRepository
    {
        public Task<IEnumerable<Author>> GetAll();
        public void addAuthor([FromBody] Author author);
        public void deleteAuthor(int id);


    }
}
