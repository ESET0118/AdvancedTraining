using Microsoft.AspNetCore.Mvc;

namespace College_App.Controllers
{
    public class DashboardController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }
    }
}
