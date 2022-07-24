using AutoMapper;
using ContactsAppAPI.Application.Mappings;
using ContactsAppAPI.Domain.Entities;

namespace ContactsAppAPI.Application.Dtos
{
    public class UpdateContactDto : IMap
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string StreetName { get; set; }
        public string HouseNumber { get; set; }
        public string? ApartmentNumber { get; set; }
        public string PostalCode { get; set; }
        public string Town { get; set; }
        public string PhoneNumber { get; set; }
        public DateTimeOffset DateOfBirth { get; set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UpdateContactDto, Contact>();
            profile.CreateMap<Contact, UpdateContactDto>();
        }
    }
}
