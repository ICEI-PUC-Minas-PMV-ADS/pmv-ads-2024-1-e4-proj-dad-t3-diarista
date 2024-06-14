using WebAPIDiarista.Services;
using WebAPIDiarista.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

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

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateDto model)
        {
            var usuariodb = await _usuariosService.GetAsync(model.Login);
            
            if (usuariodb is null)
                return NotFound();

            if(usuariodb ==null || !BCrypt.Net.BCrypt.Verify(model.Password, usuariodb.Senha))
                return Unauthorized();

            var jwt = "xxxx";

            return Ok(new { jwtToken = jwt });
        }
        private string GenerateJwtToken(Usuario model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Login),
                new Claim(ClaimTypes.Name, model.Diarista)
            });

            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }
    }
}
