using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Students_database.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollegeController : ControllerBase
    {

        private readonly Models.CollegeContext _context;
        public CollegeController(Models.CollegeContext context)
        {
           _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Models.Student>> get()
        {
            return Ok(_context.Students.ToList());
        }
    }
}
