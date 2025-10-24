using LibraryManagementAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Data
{
    public class LibraryDbContext:DbContext
    {
        public LibraryDbContext(DbContextOptions<LibraryDbContext>options):base(options)
        {
            
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<Author> Authors { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Fluent API to define relationship (optional, EF infers it automatically)
            modelBuilder.Entity<Book>()
                .HasOne(b => b.Author)       // Book has one Author
                .WithMany(a => a.Books)      // Author has many Books
                .HasForeignKey(b => b.AuthorId) // Foreign key
                .OnDelete(DeleteBehavior.Cascade); // Optional cascade delete
        }

    }
}
