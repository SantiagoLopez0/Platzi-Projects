using System;
using System.Collections.Generic;
using System.Linq;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_.NET_Core.Controllers
{
    public class AsignaturaController : Controller
    {
        private EscuelaContext _context;

        [Route("Asignatura/{asignaturaId}")]
        public IActionResult Index(string asignaturaId)
        {
            var asignatura = from asig in _context.Asignaturas
                            where asig.Id == asignaturaId
                            select asig;
            return View(asignatura.SingleOrDefault());
        }
        public IActionResult MultiAsignatura()
        {
            var asignaturas = _context.Asignaturas;
            ViewBag.Fecha = DateTime.Today;

            return View("MultiAsignatura", asignaturas.AsEnumerable());
        }

        public AsignaturaController(EscuelaContext context)
        {
            _context = context;
        }
    }
}