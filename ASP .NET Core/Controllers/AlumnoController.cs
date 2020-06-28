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

        public IActionResult Index(string Id)
        {
            if(!string.IsNullOrWhiteSpace(Id))
            {
                var alumno = from al in _context.Alumnos
                                where al.Id == Id
                                select al;
                return View(alumno.SingleOrDefault());
            }else{
                return View("MultiAlumno", _context.Alumnos);
            }
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