
using DiaristaAPI.Services;
using DiaristaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DiaristaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : ControllerBase

    {
        private readonly ClienteService _clienteService;
        public ClienteController(ClienteService clienteService)
        {
            _clienteService = clienteService;
        }
        [HttpGet]
        public async Task<List<Cliente>> Get() =>
            await _clienteService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Cliente>> Get(string id)
        {
            var cliente = await _clienteService.GetAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }
            return cliente;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Cliente newCliente)
        {
            await _clienteService.CreateAsync(newCliente);
            return CreatedAtAction(nameof(Get), new { id = newCliente.Id }, newCliente);

        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Cliente updatadeCliente)
        {
            var cliente = await _clienteService.GetAsync(id);
            if (cliente is null)
                return NotFound();
            updatadeCliente.Id = cliente.Id;
            await _clienteService.UpadateAsync(id, updatadeCliente);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var cliente = await _clienteService.GetAsync(id);
            if (cliente is null)
                return NotFound();
            await _clienteService.RemoveAsync(id);
            return NoContent();
        }
    }
}

