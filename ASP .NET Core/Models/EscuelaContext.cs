using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ASP_.NET_Core.Models
{
    public class EscuelaContext : DbContext
    {
        public DbSet<Escuela> Escuelas { get; set; }
        public DbSet<Asignatura> Asignaturas { get; set; }
        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<Evaluación> Evaluaciones { get; set; }


        public EscuelaContext(DbContextOptions<EscuelaContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //Cargar escuela
            var escuela = new Escuela();
            escuela.AñoCreación = 2005;
            escuela.Id = Guid.NewGuid().ToString();
            escuela.Nombre = "Platzi School";
            escuela.Dirección = "Av. Siempre Viva 742";
            escuela.Pais = "Colombia";
            escuela.Ciudad = "Floridablanca";
            escuela.TipoEscuela = TiposEscuela.Secundaria;

            //Cargar cursos de la escuela
            var cursos = CargarCursos(escuela);

            //cargar po cada curso: Asignaturas asociadas a curso
            var asignaturas = CargarAsignaturas(cursos);

            //Por  cada curso cargar alumnos
            var alumnos = CargarAlumnos(cursos);

            //Cargar evaluaciones
            var evaluaciones = CargarEvaluaciones(escuela, cursos, asignaturas, alumnos);

            //Sembrar los datos
            modelBuilder.Entity<Escuela>().HasData(escuela);
            modelBuilder.Entity<Curso>().HasData(cursos.ToArray());
            modelBuilder.Entity<Asignatura>().HasData(asignaturas.ToArray());
            modelBuilder.Entity<Alumno>().HasData(alumnos.ToArray());
            modelBuilder.Entity<Evaluación>().HasData(evaluaciones.ToArray());
        }
        private static List<Curso> CargarCursos(Escuela escuela)
        {
            return new List<Curso>(){
                        new Curso() {
                            Id = Guid.NewGuid().ToString(),
                            EscuelaId = escuela.Id,
                            Nombre = "101",
                            Jornada = TiposJornada.Mañana,
                            Dirección = "AV. Rivadavia al 3250 CABA"},
                        new Curso() {Id = Guid.NewGuid().ToString(),
                            EscuelaId = escuela.Id,
                            Nombre = "201",
                            Jornada = TiposJornada.Mañana,
                            Dirección = "AV. Rivadavia al 3250 CABA"},
                        new Curso() {Id = Guid.NewGuid().ToString(),
                            EscuelaId = escuela.Id,
                            Nombre = "301",
                            Jornada = TiposJornada.Mañana,
                            Dirección = "AV. Rivadavia al 3250 CABA"},
                        new Curso() {Id = Guid.NewGuid().ToString(),
                            EscuelaId = escuela.Id,
                            Nombre = "401",
                            Jornada = TiposJornada.Tarde,
                            Dirección = "AV. Rivadavia al 3250 CABA"},
                        new Curso() {Id = Guid.NewGuid().ToString(),
                            EscuelaId = escuela.Id,
                            Nombre = "501",
                            Jornada = TiposJornada.Tarde,
                            Dirección = "AV. Rivadavia al 3250 CABA"},
            };
        }
        private static List<Asignatura> CargarAsignaturas(List<Curso> cursos)
        {
            var listaAsignaturas = new List<Asignatura>();
            foreach (var curso in cursos)
            {
                var listTmp = new List<Asignatura>(){
                    new Asignatura
                    {
                        Nombre = "Matematicas",
                        CursoId = curso.Id,
                        Id = Guid.NewGuid().ToString()
                    },
                    new Asignatura{Id = Guid.NewGuid().ToString(), Nombre = "Educación Fisica", CursoId = curso.Id},
                    new Asignatura{Id = Guid.NewGuid().ToString(), Nombre = "Castellano", CursoId = curso.Id},
                    new Asignatura{Id = Guid.NewGuid().ToString(), Nombre = "Naturales", CursoId = curso.Id},
                    new Asignatura{Id = Guid.NewGuid().ToString(), Nombre = "Programación", CursoId = curso.Id},
                };
                listaAsignaturas.AddRange(listTmp);

                //Se asignan las asignaturas por convención en: "CursoId = curso.Id" y no por asignación normal.
                //curso.Asignaturas = listTmp;
            }
            return listaAsignaturas;
        }
        private List<Alumno> CargarAlumnos(List<Curso> cursos)
        {
            var listaAlumnos = new List<Alumno>();

            Random rnd = new Random();
            foreach (var curso in cursos)
            {
                int cantRandom = rnd.Next(5, 20);
                var tmplist = CrearAlumnos(cantRandom, curso);
                listaAlumnos.AddRange(tmplist);
            }
            return listaAlumnos;
        }
        private static List<Alumno> CrearAlumnos(int cantidad, Curso curso)
        {
            string[] nombre1 = { "Alba", "Felipa", "Eusebio", "Farid", "Donald", "Alvaro", "Nicolás" };
            string[] apellido1 = { "Ruiz", "Sarmiento", "Uribe", "Maduro", "Trump", "Toledo", "Herrera" };
            string[] nombre2 = { "Freddy", "Anabel", "Rick", "Murty", "Silvana", "Diomedes", "Nicomedes", "Teodoro" };

            var listaAlumnos = from n1 in nombre1
                               from n2 in nombre2
                               from a1 in apellido1
                               select new Alumno {
                                   CursoId = curso.Id,
                                   Nombre = $"{n1} {n2} {a1}",
                                    Id = Guid.NewGuid().ToString()
                                };
            return listaAlumnos.OrderBy((al) => al.Id).Take(cantidad).ToList();
        }

        public List<Evaluación> CargarEvaluaciones(Escuela escuela, List<Curso> cursos, List<Asignatura> asignaturas, List<Alumno> alumnos)
        {
            var listEval = new List<Evaluación>();
            foreach (var curso in cursos)
            {
                foreach (var asig in asignaturas)
                {
                    foreach (var al in alumnos)
                    {
                        Random random = new Random();
                        for (int i = 0; i < 5; i++)
                        {
                            var ev = new Evaluación
                            {
                                Id = Guid.NewGuid().ToString(),
                                Nombre = $"{asig.Nombre} EV#: {i}",
                                Nota = (float)Math.Round(5 * random.NextDouble(), 2),
                                AsignaturaId = asig.Id,
                                AlumnoId = al.Id
                            };
                            listEval.Add(ev);
                        }
                    }

                }
            }
            return listEval;

        }

    }
}