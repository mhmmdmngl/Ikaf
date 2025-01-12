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
        public IActionResult DuzenlemeKurulu()
        {
            return View();
        }
        public IActionResult OgrenciKayit()
        {
            return View();
        }
        public IActionResult FirmaKayit()
        {
            return View();
        }

        public IActionResult Video()
        {
            return View();
        }

        public IActionResult Animasyon()
        {
            return View();
        }
        public IActionResult Haberler()
        {
            return View();
        }
        public IActionResult Sponsorlar()
        {
            return View();
        }
        public IActionResult YerlesimPlan()
        {
            return View();
        }
        public IActionResult Sunucumuz()
        {
            return View();
        }
        public IActionResult Konusmacilar()
        {
            return View();
        }
        public IActionResult KilavuzIndir()
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "docs", "IKAF_Sponsor_Katilimci_Kilavuzu.pdf");

            if (!System.IO.File.Exists(filePath))
            {
                return NotFound("Kılavuz dosyası bulunamadı.");
            }

            var fileName = "IKAF_Sponsor_Katilimci_Kilavuzu.pdf";
            var mimeType = "application/pdf";

            return PhysicalFile(filePath, mimeType, fileName);
        }
    }
}
