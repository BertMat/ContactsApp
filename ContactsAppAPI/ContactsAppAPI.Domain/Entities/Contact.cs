using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContactsAppAPI.Domain.Entities
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string StreetName { get; set; }
        [Required]
        public string HouseNumber { get; set; }
        public string? ApartmentNumber { get; set; }
        [Required]
        public string PostalCode { get; set; }
        [Required]
        public string Town { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public DateTimeOffset DateOfBirth { get; set; }
        [NotMapped]
        public int Age { get { return DateTime.Today.Year - DateOfBirth.Year; } }
    }
}
