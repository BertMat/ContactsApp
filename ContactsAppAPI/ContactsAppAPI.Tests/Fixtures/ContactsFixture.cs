using ContactsAppAPI.Domain.Entities;

namespace ContactsAppAPI.Tests.Fixtures
{
    public static class ContactsFixture
    {
        public static Contact CreateNewContact()
        {
            return new Contact
            {
                FirstName = "Damien",
                LastName = "Dark",
                StreetName = "Ostr",
                HouseNumber = "12a",
                PostalCode = "62-700",
                Town = "Kalisz",
                PhoneNumber = "889887364",
                DateOfBirth = new DateTime(1974, 10, 2)
            };

        }

        public static IEnumerable<Contact> CreateNewContactList()
        {
            return new List<Contact>
            {
                new Contact{
                    FirstName = "Damien",
                    LastName = "Dark",
                    StreetName = "Ostr",
                    HouseNumber = "12a",
                    PostalCode = "62-700",
                    Town = "Kalisz",
                    PhoneNumber = "889887364",
                    DateOfBirth = new DateTime(1974, 10, 2)
                },
                new Contact{
                    FirstName = "Arn",
                    LastName = "Dark",
                    StreetName = "Ostr",
                    HouseNumber = "12a",
                    PostalCode = "62-700",
                    Town = "Poznan",
                    PhoneNumber = "773847367",
                    DateOfBirth = new DateTime(1963, 10, 2)
                },

            };

        }
    }
}