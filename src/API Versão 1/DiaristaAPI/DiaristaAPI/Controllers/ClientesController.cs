
using DiaristaAPI.Services;
using DiaristaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DiaristaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase

    {
        private readonly ClientesService _clientesService;
        public ClientesController(ClientesService clientesService)
        {
            _clientesService = clientesService;
        }
        [HttpGet]
        public async Task<List<Clientes>> Get() =>
            await _clientesService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Clientes>> Get(string id)
        {
            var cliente = await _clientesService.GetAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }
            return cliente;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Clientes newCliente)
        {
            await _clientesService.CreateAsync(newCliente);
            return CreatedAtAction(nameof(Get), new { id = newCliente.Id }, newCliente);

        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Clientes updatadeCliente)
        {
            var cliente = await _clientesService.GetAsync(id);
            if (cliente is null)
                return NotFound();
            updatadeCliente.Id = cliente.Id;
            await _clientesService.UpadateAsync(id, updatadeCliente);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var cliente = await _clientesService.GetAsync(id);
            if (cliente is null)
                return NotFound();
            await _clientesService.RemoveAsync(id);
            return NoContent();
        }
    }
}

