using Microsoft.AspNetCore.Mvc;

namespace College_App_View_Practise.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
