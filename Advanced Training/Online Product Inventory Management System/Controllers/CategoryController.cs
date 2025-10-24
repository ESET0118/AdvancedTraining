using Microsoft.AspNetCore.Mvc;
using Online_Product_Inventory_Management_System.Controllers;
using Online_Product_Inventory_Management_System.Models;
using Online_Product_Inventory_Management_System.Models.Repository;

[Route("api/categories")]
[ApiController]
public class CategoryController : GenericController<Category>
{
    public CategoryController(IGenericRepository<Category> repo) : base(repo) { }
}
