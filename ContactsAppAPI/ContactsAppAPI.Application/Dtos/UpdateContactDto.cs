using System.ComponentModel.DataAnnotations;
using AutoMapper;
using ContactsAppAPI.Application.Mappings;
using ContactsAppAPI.Domain.Entities;

namespace ContactsAppAPI.Application.Dtos
{
    public class UpdateContactDto : IMap
    {
        [Required]
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

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateContactDto, Contact>();
            profile.CreateMap<Contact, UpdateContactDto>();
        }
    }
}
