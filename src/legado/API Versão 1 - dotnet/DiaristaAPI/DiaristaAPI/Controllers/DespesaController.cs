using DiaristaAPI.Services;
using DiaristaAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace DiaristaAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DespesaController : ControllerBase

    {
        private readonly DespesaService _despesaService;
        public DespesaController(DespesaService despesaService)
        {
            _despesaService = despesaService;
        }
        [HttpGet]
        public async Task<List<Despesa>> Get() =>
            await _despesaService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Despesa>> Get(string id)
        {
            var despesa = await _despesaService.GetAsync(id);
            if (despesa == null)
            {
                return NotFound();
            }
            return despesa;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Despesa newDespesa)
        {
            await _despesaService.CreateAsync(newDespesa);
            return CreatedAtAction(nameof(Get), new { id = newDespesa.Id }, newDespesa);

        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Despesa updatadeDespesa)
        {
            var despesa = await _despesaService.GetAsync(id);
            if (despesa is null)
                return NotFound();
            updatadeDespesa.Id = despesa.Id;
            await _despesaService.UpadateAsync(id, updatadeDespesa);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var despesa = await _despesaService.GetAsync(id);
            if (despesa is null)
                return NotFound();
            await _despesaService.RemoveAsync(id);
            return NoContent();
        }
    }
}



