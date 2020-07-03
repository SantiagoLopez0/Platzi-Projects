using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASP_.NET_Core.Controllers
{
    public class AsignaturaController : Controller
    {
        private EscuelaContext _context;

        [Route("Asignatura/")]
        [Route("Asignatura/{asignaturaId}")]
        public IActionResult Index(string asignaturaId)
        {
            if(!string.IsNullOrWhiteSpace(asignaturaId))
            {
                var asignatura = from asig in _context.Asignaturas
                                where asig.Id == asignaturaId
                                select asig;
                return View(asignatura.SingleOrDefault());
            }else{
                return View("MultiAsignatura", _context.Asignaturas.AsEnumerable());
            }
        }
        public IActionResult MultiAsignatura()
        {
            var asignaturas = _context.Asignaturas;
            ViewBag.Fecha = DateTime.Today;

            return View("MultiAsignatura", asignaturas.AsEnumerable());
        }

        public IActionResult Create(Asignatura asignatura)
        {
            ViewBag.Fecha = DateTime.Today;
            //Validar los campos requeridos en el modelo con DataAnnotations
            if(ModelState.IsValid)
            {
            var escuela = _context.Escuelas.FirstOrDefault();

            //asignatura.EscuelaId = escuela.Id;
            asignatura.Id = Guid.NewGuid().ToString();

            _context.Asignaturas.Add(asignatura);
            _context.SaveChanges();
            ViewBag.Mensaje = "asignatura Creada";

            return View("Index", asignatura.Id);
            }else{
                ViewBag.Mensaje = "asignatura No Creada";
                return View(asignatura);
            }
        }
        // GET: Curso/Edit/id
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var asignatura = await _context.Cursos.FindAsync(id);
            if (asignatura == null)
            {
                return NotFound();
            }
            return View(asignatura);
        }

        // POST: Curso/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id, Nombre")] Asignatura asignatura)
        {
            if (id != asignatura.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(asignatura);
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {
                    if (asignatura.Id != null)
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
            return View(asignatura);
        }
                //GET: Delete Curso
        public IActionResult Delete(string Id)
        {
            if(!string.IsNullOrWhiteSpace(Id))
            {
                var asignatura = from c in _context.Asignaturas
                                where c.Id == Id
                                select c;
                return View(asignatura.SingleOrDefault());
            }else{
                return View("MultiAsignatura", _context.Asignaturas);
            }
        }
        //POST: Delete asignatura
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string Id)
        {
            var asignatura = await _context.Asignaturas.FindAsync(Id);
            try
            {
               _context.Asignaturas.Remove(asignatura);
               await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }catch(Exception e)
            {
                return View(asignatura);
                throw e;
            }
        }

        public AsignaturaController(EscuelaContext context)
        {
            _context = context;
        }
    }
}