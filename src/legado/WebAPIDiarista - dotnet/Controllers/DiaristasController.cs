using WebAPIDiarista.Services;
using WebAPIDiarista.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace WebAPIDiarista.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class DiaristasController : ControllerBase
    {
        private readonly DiaristasService _diaristasService;

        public DiaristasController(DiaristasService diaristasService)
        {
            _diaristasService = diaristasService;
        }
        [HttpGet]
        public async Task<List<Diarista>> Get() =>
            await _diaristasService.GetAsync();
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Diarista>> Get(string id)
        {
            var diarista = await _diaristasService.GetAsync(id);
            if (diarista == null)
            {
                return NotFound();
            }
            return diarista;
        }
        [HttpPost]
        public async Task<IActionResult> Post(Diarista newDiarista)
        {
            await _diaristasService.CreateAsync(newDiarista);
            return CreatedAtAction(nameof(Get), new { id = newDiarista.Id }, newDiarista);
        }
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, Diarista updatedDiarista)
        {
            var diarista = await _diaristasService.GetAsync(id);
            if(diarista is null)
                return NotFound();
            updatedDiarista.Id = diarista.Id;
            await _diaristasService.UpdateAsync(id, updatedDiarista);
            return NoContent();
        }
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var diarista = await _diaristasService.GetAsync(id);
            if (diarista is null)
                return NotFound();
            await _diaristasService.RemoveAsync(id);
            return NoContent();
        }
    }
}
