using Employee_Management.Models;
using Employee_Management.Models.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Employee_Management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository _IEmployeeRepository;
        public EmployeeController(IEmployeeRepository iEmployeeRepository)
        {
            _IEmployeeRepository = iEmployeeRepository;
        }
        [HttpPost]
        public async Task AddAsync(Employee employee)
        {
            await _IEmployeeRepository.AddAsync(employee);

        }
        [HttpDelete]
        public async Task DeleteAsync(int id)
        {
            await _IEmployeeRepository.DeleteAsync(id);
        }
        [HttpGet]
        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            return await _IEmployeeRepository.GetAllAsync();
        }
        [HttpGet("{id}")]

        public async Task<Employee?> GetByIdAsync(int id)
        {
            return await _IEmployeeRepository.GetByIdAsync(id);
        }
        [HttpPut]
        public async Task UpdateAsync(Employee employee)
        {
            await _IEmployeeRepository.UpdateAsync(employee);
        }
    }
}
