using AutoMapper;
using ContactsAppAPI.Application.Mappings;
using ContactsAppAPI.Domain.Entities;

namespace ContactsAppAPI.Application.Dtos
{
    public class ContactDto : IMap
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

        public int Age { get { return DateTime.Today.Year - DateOfBirth.Year; } }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<Contact, ContactDto>();
        }
    }
}
