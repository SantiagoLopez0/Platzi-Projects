using System;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_.NET_Core.Controllers
{
    public class EscuelaController : Controller
    {
        public IActionResult Index()
        {
            var escuela = new Escuela();
            escuela.AñoCreación = 2005;
            escuela.UniqueId = Guid.NewGuid().ToString();
            escuela.Nombre = "Platzi School";
            escuela.Dirección = "Av. Siempre Viva 742";
            escuela.Pais = "Colombia";
            escuela.Ciudad = "Floridablanca";
            escuela.TipoEscuela = TiposEscuela.Secundaria;

            return View(escuela);
        }
    }
}