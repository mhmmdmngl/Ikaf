using Microsoft.AspNetCore.Mvc;

namespace İkaf.Controllers
{
    public class IKAFController : Controller
    {
        public IActionResult Menu(string MenuAdi)
        {
            return View();
        }

        public IActionResult Hakkimizda()
        {
            return View();
        }

        public IActionResult Kurullar()
        {
            return View();
        }
        public IActionResult PaydasUniversiteler()
        {
            return View();
        }

        public IActionResult Konaklama()
        {
            return View();
        }

        public IActionResult Katalog()
        {
            return View();
        }
        public IActionResult DanismaKurulu()
        {
            return View();
        }
        public IActionResult Rektorumuzden()
        {
            return View();
        }
    }
}
