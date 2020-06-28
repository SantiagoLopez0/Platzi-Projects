using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASP_.NET_Core.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace ASP_.NET_Core
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //CreateHostBuilder(args).Build().Run();

            //Variable donde solamente se compila la solución.
            var host = CreateHostBuilder(args).Build();

            //Para acceder a los servicios se crea un scope.
            //Para evitar que la variable scope se guarde en memoria se usa "using". Al terminar las instrucciones dentro de este metodo de destruye la variable "scope".
            using(var scope = host.Services.CreateScope())
            {
                //El scope accede a los servicios
                var services = scope.ServiceProvider;

                //Puede que no se tenga conexión a la base de tados. Por este motivo se controla el error en el caso de que la base de datos no este creada o no se tenga conexión.
                try{
                    //Se extrae el servicio que se necesita (Data Context) de Startup.
                    var context = services.GetRequiredService<EscuelaContext>();

                    //Le pregunta al contexto si la base de datos este creada.
                    context.Database.EnsureCreated();
                }catch(Exception e)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(e, "An error occurred creating the DB.");
                }
            }

            //Se ejecuta la solución
            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
