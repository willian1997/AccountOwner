using Microsoft.AspNetCore.Mvc;
using Contracts;

namespace AccountOwnerServer.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILoggerManager _logger;

    public WeatherForecastController(ILoggerManager logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<string> Get()
    {   
        _logger.LogInfo("Testanto log de INFO");
        _logger.LogDebug("Testanto log de Debug");
        _logger.LogError("Testanto log de erro");
        _logger.LogWarn("Testanto log de aviso" );
        
        return new string[]
        {
            "value1",
            "value2"
        };
    }
}
