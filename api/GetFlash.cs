using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace backend
{
    public static class GetFlash
    {
        [FunctionName("GetFlash")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", Route = "flash")] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Client requested flash.");

            string[] names = new[]
            {
                "dog",
                "cat",
                "lion",
                "mouse",
                "bear",
                "bird",
                "humming bird",
                "flowers",
                "lillypads",
                "beetle"
            };

            string namesJson = JsonConvert.SerializeObject(names);
            
            return new OkObjectResult(namesJson);
        }
    }
}
