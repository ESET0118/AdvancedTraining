using Microsoft.EntityFrameworkCore;

namespace College_App.Data
{
    public class collegeDbContext:DbContext
    {
        public collegeDbContext(DbContextOptions<collegeDbContext>options):base(options)
        {
            
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
