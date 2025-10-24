using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Online_Product_Inventory_Management_System.Models;
using Online_Product_Inventory_Management_System.Models.Repository;

namespace Online_Product_Inventory_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenericController<T> : ControllerBase where T:class
    {
        private readonly IGenericRepository<T> _IGenericRepository;
        public GenericController(IGenericRepository<T> iGenericRepository)
        {
            _IGenericRepository = iGenericRepository;
        }

        [HttpGet]

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _IGenericRepository.GetAll();
        }
        [HttpGet("{id}")]
        public T GetById(int id)
        {
            return _IGenericRepository.GetById(id);
        }
        [HttpPost("add")]
        public void Add([FromBody] T entity)
        {
            _IGenericRepository.Add(entity);
        }
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _IGenericRepository.Delete(id);
        }

        [HttpPost]
        public void Save()
        {
            _IGenericRepository.Save();
        }
        [HttpPut]
        public void Update([FromBody] T entity)
        {
            _IGenericRepository.Update(entity);
        }
    }
}
