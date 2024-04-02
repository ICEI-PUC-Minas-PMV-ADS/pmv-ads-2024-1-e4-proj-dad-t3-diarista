using WebAPIDiarista.Services;
using WebAPIDiarista.Models;
using Microsoft.AspNetCore.Mvc;

namespace WebAPIDiarista.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DiariasController : ControllerBase
    {
        private readonly DiariasService _diariasService;

        public DiariasController(DiariasService diariasService)
        {
            _diariasService = diariasService;
        }
        [HttpGet]
        public async Task<List<Diaria>> Get() =>
            await _diariasService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Diaria>> Get(string id)
        {
            var diaria = await _diariasService.GetAsync(id);
            if (diaria == null)
            {
                return NotFound();
            }
            return diaria;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Diaria newDiaria)
        {
            await _diariasService.CreateAsync(newDiaria);
            return CreatedAtAction(nameof(Get), new { id = newDiaria.Id }, newDiaria);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Diaria updatedDiaria)
        {
            var diaria = await _diariasService.GetAsync(id);
            if(diaria is null)
                return NotFound();
            updatedDiaria.Id = diaria.Id;
            await _diariasService.UpdateAsync(id, updatedDiaria);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var diaria = await _diariasService.GetAsync(id);
            if (diaria is null)
                return NotFound();
            await _diariasService.RemoveAsync(id);
            return NoContent();
        }
    }
}
