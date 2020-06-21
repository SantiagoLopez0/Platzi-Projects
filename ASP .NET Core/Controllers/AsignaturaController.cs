using System;
using System.Collections.Generic;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Mvc;


namespace ASP_.NET_Core.Controllers
{
    public class AsignaturaController : Controller
    {
        public IActionResult Index()
        {
            var asignatura = new Asignatura{Nombre = "Programación",
                                UniqueId = Guid.NewGuid().ToString()
            };

            return View(asignatura);
        }
        public IActionResult MultiAsignatura()
        {
            var listaAsignaturas = new List<Asignatura>(){
                    new Asignatura{Nombre = "Matematicas",
                                UniqueId = Guid.NewGuid().ToString()
                    },
                    new Asignatura{Nombre = "Educación Fisica",
                                UniqueId = Guid.NewGuid().ToString()
                    },
                    new Asignatura{Nombre = "Castellano",
                                UniqueId = Guid.NewGuid().ToString()
                    },
                    new Asignatura{Nombre = "Naturales",
                                UniqueId = Guid.NewGuid().ToString()
                    },
                    new Asignatura{Nombre = "Programación",
                                UniqueId = Guid.NewGuid().ToString()
                    }
            };

            ViewBag.Fecha = DateTime.Today;

            return View("MultiAsignatura", listaAsignaturas);
        }
    }
}