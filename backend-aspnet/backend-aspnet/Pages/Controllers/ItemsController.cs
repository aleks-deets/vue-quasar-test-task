using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace backend_aspnet.Pages.Controllers
{
    [Route("api")]
    [ApiController]
    public class DataController : ControllerBase
    {
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
