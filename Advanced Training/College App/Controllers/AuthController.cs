using College_App.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace College_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly CollegeDbContext _context;

        public AuthController(IConfiguration configuration, CollegeDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        // 🔹 POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest user)
        {
            if (user == null || string.IsNullOrWhiteSpace(user.Username) || string.IsNullOrWhiteSpace(user.Password))
                return BadRequest("Username and password are required.");

            // ✅ Check if user exists in the database
            var dbUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == user.Username && u.Password == user.Password);

            if (dbUser == null)
                return Unauthorized("Invalid username or password.");

            // ✅ Allow only Admin role to log in
            if (!string.Equals(dbUser.Role, "Administrator", StringComparison.OrdinalIgnoreCase))
                return Unauthorized("Only Admin users are authorized.");

            // ✅ Generate JWT token
            var token = GenerateJwtToken(dbUser);
            return Ok(new
            {
                Message = "Login successful!",
                Token = token
            });
        }

        // 🔹 JWT Token Generator
        private string GenerateJwtToken(User user)
        {
            var jwtSection = _configuration.GetSection("Jwt");
            var key = Encoding.UTF8.GetBytes(jwtSection["Key"]);

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddMinutes(Convert.ToDouble(jwtSection["ExpireMinutes"] ?? "60")),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(key),
                    SecurityAlgorithms.HmacSha256Signature
                ),
                Issuer = jwtSection["Issuer"],
                Audience = jwtSection["Audience"]
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }

    // ✅ New lightweight DTO (so we don't require Role)
    public class LoginRequest
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
