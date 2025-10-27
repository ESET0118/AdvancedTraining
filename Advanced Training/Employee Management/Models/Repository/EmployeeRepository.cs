
using Microsoft.EntityFrameworkCore;

namespace Employee_Management.Models.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDbContext _context;
        public async Task AddAsync(Employee employee)
        {
            await _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var emp =await _context.Employees.FindAsync(id);
            _context.Employees.Remove(emp);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            return await _context.Employees.ToListAsync();
        }

        public async Task<Employee?> GetByIdAsync(int id)
        {
            return await _context.Employees.FindAsync(id);
        }

        public async Task UpdateAsync(Employee employee)
        {
            var emp=await _context.Employees.FindAsync(employee.EmployeeId);
            emp.Equals(employee);
            await _context.SaveChangesAsync();
        }
    }
}
