using WebAPIDiarista.Services;
using WebAPIDiarista.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace WebAPIDiarista.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly UsuariosService _usuariosService;

        public UsuariosController(UsuariosService usuariosService)
        {
            _usuariosService = usuariosService;
        }
        [HttpGet]
        public async Task<List<Usuario>> Get() =>
            await _usuariosService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Usuario>> Get(string id)
        {
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario == null)
            {
                return NotFound();
            }
            return usuario;
        }
        [HttpPost]
        public async Task<IActionResult> Post(UsuarioDto newUsuario)
        {
            Usuario novo = new Usuario()
            {
                Login = newUsuario.Login,
                Diarista = BCrypt.Net.BCrypt.HashPassword(newUsuario.Senha),
                Senha = newUsuario.Senha
            };

            await _usuariosService.CreateAsync(novo);
            return CreatedAtAction(nameof(Get), new { id = novo.Id }, novo);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, UsuarioDto updatedUsuario)
        {
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario is null)
                return NotFound();

            usuario.Login = updatedUsuario.Login;
            usuario.Diarista = updatedUsuario.Diarista;
            usuario.Senha = BCrypt.Net.BCrypt.HashPassword(updatedUsuario.Senha);
            usuario.Id = updatedUsuario.Id;

            await _usuariosService.UpdateAsync(id, usuario);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario is null)
                return NotFound();
            await _usuariosService.RemoveAsync(id);
            return NoContent();
        }
    }
}
