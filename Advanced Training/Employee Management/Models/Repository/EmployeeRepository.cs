
using Microsoft.EntityFrameworkCore;

namespace Employee_Management.Models.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDbContext _context;

        public EmployeeRepository(EmployeeDbContext context)
        {
            _context = context;
        }
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
            var emp = await _context.Employees.FindAsync(employee.EmployeeId);
            if (emp == null)
                return;

            emp.FullName = employee.FullName;
            emp.Email = employee.Email;
            emp.Department = employee.Department;
            emp.Salary = employee.Salary;

            await _context.SaveChangesAsync();
        }
    }
}
