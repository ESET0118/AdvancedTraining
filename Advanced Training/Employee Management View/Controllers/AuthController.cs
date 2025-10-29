using Microsoft.AspNetCore.Mvc;

namespace Employee_Management_View.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
