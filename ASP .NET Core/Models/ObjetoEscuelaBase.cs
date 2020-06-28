using System;

namespace ASP_.NET_Core.Models
{
    public abstract class ObjetoEscuelaBase
    {
        public string Id { get; set; }
        public string Nombre { get; set; }

        public ObjetoEscuelaBase(){}

        public override string ToString()
        {
            return $"{Nombre},{Id}";
        }
    }
}