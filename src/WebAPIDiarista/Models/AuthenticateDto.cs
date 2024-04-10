using System.ComponentModel.DataAnnotations;
namespace WebAPIDiarista.Models
{
    public class AuthenticateDto
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
