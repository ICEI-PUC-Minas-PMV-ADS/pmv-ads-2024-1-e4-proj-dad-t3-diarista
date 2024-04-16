using System.ComponentModel.DataAnnotations;

namespace WebAPIDiarista.Models
{
    public class AuthenticateDto
    {
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
