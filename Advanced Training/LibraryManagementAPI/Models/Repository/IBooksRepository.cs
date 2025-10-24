using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementAPI.Models.Repository
{
    public interface IBooksRepository
    {
        public Task<IEnumerable<Book>> GetAll();
        public void addBook([FromBody] Book book);
        public void deleteBook(int id);


    }
}
