using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ASP_.NET_Core.Models
{
    public class Curso:ObjetoEscuelaBase
    {
        [Required(ErrorMessage = "El nombre del curso es requerido")]
        [StringLength(5)]
        public override string Nombre { get; set; }
        [Required]
        public TiposJornada Jornada { get; set;}
        public List<Asignatura> Asignaturas{ get; set; }
        public List<Alumno> Alumnos{ get; set; }
        [Required(ErrorMessage = "La dirección es requerida")]
        [MinLength(10)]
        public string Dirección { get; set; }

        public string EscuelaId { get; set; }
        public Escuela Escuela { get; set; }
    }
}