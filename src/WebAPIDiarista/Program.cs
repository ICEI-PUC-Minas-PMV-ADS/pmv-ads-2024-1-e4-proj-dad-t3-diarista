using WebAPIDiarista.Models;
using WebAPIDiarista.Services;

namespace WebAPIDiarista
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.Configure<DBDiaristaDataBaseSettings>(
                builder.Configuration.GetSection("DBDiaristaDataBase"));
            builder.Services.AddSingleton<DiaristasService>();
            builder.Services.AddSingleton<DiariasService>();
            builder.Services.AddSingleton<DespesasService>();
            builder.Services.AddSingleton<ClientesService>();
            builder.Services.AddSingleton<UsuariosService>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
