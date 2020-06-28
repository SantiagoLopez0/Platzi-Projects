using System;
using System.Linq;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_.NET_Core.Controllers
{
    public class EscuelaController : Controller
    {
        private EscuelaContext _context;
        public IActionResult Index()
        {
            var escuela = _context.Escuelas.FirstOrDefault();
            return View(escuela);
        }

        public EscuelaController(EscuelaContext context)
        {
            _context = context;
        }
    }
}