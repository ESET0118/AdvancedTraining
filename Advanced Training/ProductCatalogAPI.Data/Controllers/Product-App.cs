using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ProductCatalogAPI.Data.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Product_App : ControllerBase
    {
        //1.GET all products
        [HttpGet("GetAllProducts")]
        public IEnumerable<ProductDTO> GetAllProducts()
        {
            return ProductRepository.Products;
        }

        //2.GET product by ID
        [HttpGet("GetProductById")]
        public ActionResult<ProductDTO> GetProductById(int id)
        {
            var product = ProductRepository.Products.FirstOrDefault(p => p.ProductID == id);
            if (product == null)
            {
                return NotFound();
            }
            return product;
        }

        //3.POST → Add new product
        [HttpPost("AddProduct")]

        public ActionResult AddProduct([FromBody] ProductDTO productDTO)
        {
            if (productDTO.Price<=0 || productDTO.StockQuantity<0)
            {
                return BadRequest("Price must be greater than 0 and Stock Quantity must be non-negative.");
            }
            var newProduct = new ProductDTO()
            {
                ProductID = ProductRepository.Products.Max(p => p.ProductID) + 1,
                Name = productDTO.Name,
                Category = productDTO.Category,
                Price = productDTO.Price,
                StockQuantity = productDTO.StockQuantity

            };
            ProductRepository.Products.Add(newProduct);
            return Ok(newProduct);

        }

        //Ensure Price > 0 and StockQuantity >= 0

        //4.PUT → Replace product details completely

        [HttpPut("UpdateProduct")]
        public ActionResult UpdateProduct(int id, [FromBody] ProductDTO productDTO)
        {
            var existingProduct = ProductRepository.Products.FirstOrDefault(p => p.ProductID == id);
            if (existingProduct == null)
            {
                return NotFound();
            }
            if (productDTO.Price <= 0 || productDTO.StockQuantity < 0)
            {
                return BadRequest("Price must be greater than 0 and Stock Quantity must be non-negative.");
            }
            existingProduct.Name = productDTO.Name;
            existingProduct.Category = productDTO.Category;
            existingProduct.Price = productDTO.Price;
            existingProduct.StockQuantity = productDTO.StockQuantity;
            return Ok(existingProduct);
        }

        //5.PATCH → Update price or stock quantity only
        [HttpPatch("UpdateProductPatch")]
        public ActionResult UpdateProductPatch(int id,[FromBody] JsonPatchDocument<ProductDTO> productDTO)
        {
            var existingProduct = ProductRepository.Products.FirstOrDefault(p => p.ProductID == id);
            if (existingProduct == null)
            {
                return NotFound();
            }
            productDTO.ApplyTo(existingProduct, ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (existingProduct.Price <= 0 || existingProduct.StockQuantity < 0)
            {
                return BadRequest("Price must be greater than 0 and Stock Quantity must be non-negative.");
            }
            return Ok(existingProduct);

        }
    }
}
