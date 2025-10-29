using Microsoft.AspNetCore.Mvc;

namespace Employee_Management_View.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
