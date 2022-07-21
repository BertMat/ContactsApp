using AutoMapper;
using ContactsAppAPI.Application.Mappings;
using ContactsAppAPI.Domain.Entities;
using System.ComponentModel.DataAnnotations;

namespace ContactsAppAPI.Application.Dtos
{
    public class CreateContactDto : IMap
    {
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


        public void Mapping(Profile profile)
        {
            profile.CreateMap<Contact, CreateContactDto>();
        }
    }
}
