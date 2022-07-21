using ContactsAppAPI.Domain.Entities;

namespace ContactsAppAPI.Domain.Interfaces
{
    public interface IContactRepository
    {
        IEnumerable<Contact> GetAll();
        IEnumerable<Contact> GetById(IEnumerable<int> ids);
        Contact GetByIdSingle(int id);
        Contact Add(Contact contact);
        IEnumerable<Contact> AddSerial(IEnumerable<Contact> contacts);
        void Update(Contact contact);
        void UpdateSerial(IEnumerable<Contact> contacts);
        void Delete(Contact contact);
        void DeleteSerial(IEnumerable<Contact> contacts);
    }
}
