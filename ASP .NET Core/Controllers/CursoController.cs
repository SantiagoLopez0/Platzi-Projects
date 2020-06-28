using System;
using System.Collections.Generic;
using System.Linq;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;


namespace ASP_.NET_Core.Controllers
{
    public class CursoController : Controller
    {
        private EscuelaContext _context;

        public IActionResult Index(string Id)
        {
            if(!string.IsNullOrWhiteSpace(Id))
            {
                var curso = from c in _context.Cursos
                                where c.Id == Id
                                select c;
                return View(curso.SingleOrDefault());
            }else{
                return View("MultiCurso", _context.Cursos);
            }
        }
        public IActionResult MultiCurso()
        {
            var listaCurso = _context.Cursos;
            ViewBag.Fecha = DateTime.Today;

            return View("MultiCurso", listaCurso);
        }


        public CursoController(EscuelaContext context)
        {
            _context = context;
        }
    }
}