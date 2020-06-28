using System;
using System.Collections.Generic;
using System.Linq;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;


namespace ASP_.NET_Core.Controllers
{
    public class AlumnoController : Controller
    {
        private EscuelaContext _context;
        public IActionResult Index()
        {
            var alumno = new Alumno{Nombre = "Pepe Perez",
                                Id = Guid.NewGuid().ToString()
            };

            return View(alumno);
        }
        public IActionResult MultiAlumno()
        {
            var listaAlumnos = _context.Alumnos;
            ViewBag.Fecha = DateTime.Today;

            return View("MultiAlumno", listaAlumnos);
        }


        public AlumnoController(EscuelaContext context)
        {
            _context = context;
        }
    }
}