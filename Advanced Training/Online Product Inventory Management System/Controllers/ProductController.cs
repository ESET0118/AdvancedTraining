using Microsoft.AspNetCore.Mvc;
using Online_Product_Inventory_Management_System.Controllers;
using Online_Product_Inventory_Management_System.Models;
using Online_Product_Inventory_Management_System.Models.Repository;

[Route("api/products")]
[ApiController]
public class ProductController : GenericController<Product>
{
    public ProductController(IGenericRepository<Product> repo) : base(repo) { }
}
