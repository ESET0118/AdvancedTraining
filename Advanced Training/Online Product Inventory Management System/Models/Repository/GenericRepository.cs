using Microsoft.EntityFrameworkCore;

namespace Online_Product_Inventory_Management_System.Models.Repository
{
    public class GenericRepository<T> : IGenericRepository<T> where T:class,new()
    {
        private readonly InventoryContext _InventoryContext;
        private readonly DbSet<T> _InventorySet;

        public GenericRepository(InventoryContext inventoryContext)
        {
            _InventoryContext = inventoryContext;
            _InventorySet = inventoryContext.Set<T>();
        }
        public void Add(T entity)
        {
            _InventorySet.Add(entity);
            _InventoryContext.SaveChanges();
        }

        public void Delete(int id)
        {
            _InventorySet.Remove(GetById(id));
            _InventoryContext.SaveChanges();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _InventorySet.ToListAsync();
        }

        public T GetById(int id)
        {
            return _InventorySet.Find(id);
        }

        public void Save()
        {
            _InventoryContext.SaveChanges();
        }

        public void Update(T entity)
        {
            _InventorySet.Update(entity);
            _InventoryContext.SaveChanges();
        }
    }
}
