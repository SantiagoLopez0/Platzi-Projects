using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
        [HttpPost]
        public IActionResult Create(Curso curso)
        {
            ViewBag.Fecha = DateTime.Today;
            //Validar los campos requeridos en el modelo con DataAnnotations
            if(ModelState.IsValid)
            {
            var escuela = _context.Escuelas.FirstOrDefault();

            curso.EscuelaId = escuela.Id;
            curso.Id = Guid.NewGuid().ToString();

            _context.Cursos.Add(curso);
            _context.SaveChanges();
            ViewBag.Mensaje = "Curso Creado";

            return View("Index", curso.Id);
            }else{
                ViewBag.Mensaje = "Curso No Creado";
                return View(curso);
            }
        }
        // GET: Curso/Edit/id
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var curso = await _context.Cursos.FindAsync(id);
            if (curso == null)
            {
                return NotFound();
            }
            return View(curso);
        }

        // POST: Curso/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id, Nombre, Dirección, Jornada")] Curso curso)
        {
            if (id != curso.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(curso);
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {
                    if (curso.Id != null)
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw e;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(curso);
        }
        //GET: Delete Curso
        public IActionResult Delete(string Id)
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
        //POST: Delete Curso
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string Id)
        {
            var curso = await _context.Cursos.FindAsync(Id);

            try
           {
               _context.Cursos.Remove(curso);
               await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }catch(Exception e)
            {
                return View(curso);
                throw e;
            }
        }
        public CursoController(EscuelaContext context)
        {
            _context = context;
        }
    }
}