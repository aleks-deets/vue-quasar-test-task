using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace backend_aspnet.Pages.Controllers
{
    [Route("api")] // Базовый маршрут для всех endpoint
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet("items")]
        public IActionResult GetItems()
        {
            var items = new[]
            {
                new { Item = "First" },
                new { Item = "Second" }
            };
            return Ok(items);
        }

        [HttpGet("matrix")]
        public IActionResult GetMatrix()
        {
            int[][] matrix = new int[][]
            {
            new int[] { 1, 2, 3, 4 },
            new int[] { 5, 6, 7, 8 },
            new int[] { 9, 10, 11, 12 }
            };
            return Ok(matrix);
        }
    }
}
