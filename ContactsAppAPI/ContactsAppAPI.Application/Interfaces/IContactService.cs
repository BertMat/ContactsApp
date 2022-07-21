using ContactsAppAPI.Application.Dtos;

namespace ContactsAppAPI.Application.Interfaces
{
    public interface IContactService
    {
        IEnumerable<ContactDto> GetAllContacts();
        IEnumerable<ContactDto> GetContactsById(IEnumerable<int> ids);
        ContactDto GetSingleContactById(int id);
        ContactDto AddNewContact(CreateContactDto newContact);
        IEnumerable<ContactDto> AddNewContactSerial(IEnumerable<CreateContactDto> newContacts);
        void UpdateContact(UpdateContactDto contact);
        void UpdateContactSerial(IEnumerable<UpdateContactDto> contacts);
        void DeleteContact(int id);
        void DeleteContactSerial(IEnumerable<int> ids);
    }
}
