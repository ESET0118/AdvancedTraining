using Microsoft.AspNetCore.Mvc;

namespace College_App_View.Controllers
{
    public class AuthController1 : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
