using College_App.Data;
using Microsoft.EntityFrameworkCore;
namespace College_App.Model.Repository
{
    public class StudentRepository : IStudent
    {
        private readonly collegeDbContext _context;

        public StudentRepository(collegeDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Student>> getAll()
        {
            return await _context.Students.ToListAsync(); 
        }
    }
}
