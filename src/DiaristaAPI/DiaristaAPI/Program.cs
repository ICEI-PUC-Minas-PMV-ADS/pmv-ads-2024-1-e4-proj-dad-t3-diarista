using DiaristaAPI.Models;
using DiaristaAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Configurado Banco de Dados com C#
builder.Services.Configure<DiaristaDataSettings>(
    builder.Configuration.GetSection("DiaristaData"));
builder.Services.AddSingleton<DiaristasService>();

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
