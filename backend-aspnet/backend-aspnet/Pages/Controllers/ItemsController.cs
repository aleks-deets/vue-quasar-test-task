using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace backend_aspnet.Pages.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetItems()
        {
            var items = new[]
            {
                new { Item = "First" },
                new { Item = "Second" }
            };
            return Ok(items);
        }
    }
}
