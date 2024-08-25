using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
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
        
        [HttpGet("data")]
        public IActionResult GetData()
        {
            var items = new[]
            {
                new { id = 00, column1 = "Value 0", column2 = "Value 1", column3 = "Value 2", column4 = "Value 3", column5 = "Value4", column6 = "Value5", column7 = "Value6", column8 = "Value7" },
                new { id = 01, column1 = "Value 10", column2 = "Value 11", column3 = "Value 12", column4 = "Value 13", column5 = "Value14", column6 = "Value15", column7 = "Value16", column8 = "Value17"  },
                new { id = 02, column1 = "Value 20", column2 = "Value 21", column3 = "Value 22", column4 = "Value 23", column5 = "Value24", column6 = "Value25", column7 = "Value26", column8 = "Value27"  },
            };
            return Ok(items);
        }
        
        [HttpGet("random")]
        public IActionResult GetRandomData()
        {
            var random = new Random();
            var items = new List<dynamic>();
            for (int i = 0; i < 10; i++)
            {
                items.Add(new
                {
                    id = i,
                    column1 = $"Value {random.Next(100)}",
                    column2 = $"Value {random.Next(100)}",
                    column3 = $"Value {random.Next(100)}",
                    column4 = $"Value {random.Next(100)}",
                    column5 = $"Value {random.Next(100)}",
                    column6 = $"Value {random.Next(100)}",
                    column7 = $"Value {random.Next(100)}",
                    column8 = $"Value {random.Next(100)}",
                });
            };
            return Ok(items);
        }
    }
}
