using AutoMapper;
using ContactsAppAPI.Application.Dtos;
using ContactsAppAPI.Application.Interfaces;
using ContactsAppAPI.Domain.Entities;
using ContactsAppAPI.Domain.Interfaces;

namespace ContactsAppAPI.Application.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;
        private readonly IMapper _mapper;

        public ContactService(IContactRepository contactRepository, IMapper mapper)
        {
            _contactRepository = contactRepository;
            _mapper = mapper;
        }
        public ContactDto AddNewContact(CreateContactDto newContact)
        {
            var contact = _mapper.Map<Contact>(newContact);
            _contactRepository.Add(contact);

            return _mapper.Map<ContactDto>(contact);
        }

        public IEnumerable<ContactDto> AddNewContactSerial(IEnumerable<CreateContactDto> newContacts)
        {
            var contacts = _mapper.Map<IEnumerable<Contact>>(newContacts);
            _contactRepository.AddSerial(contacts);
            return _mapper.Map<IEnumerable<ContactDto>>(contacts);
        }

        public void DeleteContact(int id)
        {
            var contact = _contactRepository.GetByIdSingle(id);
            _contactRepository.Delete(contact);
        }

        public void DeleteContactSerial(IEnumerable<int> ids)
        {
            var contacts = _contactRepository.GetById(ids);
            _contactRepository.DeleteSerial(contacts);
        }

        public IEnumerable<ContactDto> GetAllContacts()
        {
            var contacts = _contactRepository.GetAll();
            return _mapper.Map<IEnumerable<ContactDto>>(contacts);
        }

        public IEnumerable<ContactDto> GetContactsById(IEnumerable<int> ids)
        {
            var contacts = _contactRepository.GetById(ids);
            return _mapper.Map<IEnumerable<ContactDto>>(contacts);
        }

        public ContactDto GetSingleContactById(int id)
        {
            var contact = _contactRepository.GetByIdSingle(id);
            return _mapper.Map<ContactDto>(contact);
        }

        public void UpdateContact(UpdateContactDto contact)
        {
            var existingContact = _contactRepository.GetByIdSingle(contact.Id);

            var updatedContact = _mapper.Map(contact, existingContact);
            _contactRepository.Update(updatedContact);
        }

        public void UpdateContactSerial(IEnumerable<UpdateContactDto> contacts)
        {
            var existingContacts = _contactRepository.GetById(contacts.Select(p => p.Id));

            var updatedContacts = _mapper.Map(contacts, existingContacts);
            _contactRepository.UpdateSerial(updatedContacts);
        }
    }
}
