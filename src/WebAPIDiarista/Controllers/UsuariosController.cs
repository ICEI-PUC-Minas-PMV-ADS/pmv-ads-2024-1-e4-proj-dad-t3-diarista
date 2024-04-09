using WebAPIDiarista.Services;
using WebAPIDiarista.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebAPIDiarista.Controllers
{
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
        public async Task<IActionResult> Post(Usuario newUsuario)
        {
            await _usuariosService.CreateAsync(newUsuario);
            return CreatedAtAction(nameof(Get), new { id = newUsuario.Id }, newUsuario);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Usuario updatedUsuario)
        {
            var usuario = await _usuariosService.GetAsync(id);
            if (usuario is null)
                return NotFound();
            updatedUsuario.Id = usuario.Id;
            await _usuariosService.UpdateAsync(id, updatedUsuario);
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
