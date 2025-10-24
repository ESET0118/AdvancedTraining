using Microsoft.EntityFrameworkCore;
using LibraryManagementAPI.Data;
using LibraryManagementAPI.Models.Repository;
// Required for UseSwagger() and UseSwaggerUI()
using Microsoft.AspNetCore.Builder;


namespace LibraryManagementAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // ----------------------------
            // Add services to the container
            // ----------------------------

            // Add controllers for API
            builder.Services.AddControllers();

            // Add Swagger services (Swashbuckle 8.0.0)
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Add DbContext (SQL Server)
            builder.Services.AddDbContext<LibraryDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("ConnectionDb")));

            // Add repository services
            builder.Services.AddScoped<IBooksRepository, BooksRepository>();
            builder.Services.AddScoped<IAuthorRepository, AuthorRepository>();

            var app = builder.Build();

            // ----------------------------
            // Configure the HTTP request pipeline
            // ----------------------------

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Library API v1");
                    c.RoutePrefix = string.Empty; // Swagger UI at root
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            // Map API controllers
            app.MapControllers();

            // Optional: default MVC route (if using views)
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            // Optional: root endpoint for health check
            app.MapGet("/", () => "Library Management API is running!");

            app.Run();
        }
    }
}
