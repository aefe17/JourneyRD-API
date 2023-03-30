using Application.Locality;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class LocalityController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Localities>>> GetLocalities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpPost]
        public async Task<ActionResult> CreateLocality(Localities locality)
        {
            return Ok(await Mediator.Send(new Create.Command {localities = locality}));
        }
    }
}