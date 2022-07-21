using ContactsAppAPI.Domain.Entities;
using ContactsAppAPI.Domain.Interfaces;
using ContactsAppAPI.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactsAppAPI.Infrastructure.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public ContactRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }
        public Contact Add(Contact contact)
        {
            _applicationDbContext.Contacts.Add(contact);
            _applicationDbContext.SaveChanges();
            return contact;
        }

        public IEnumerable<Contact> AddSerial(IEnumerable<Contact> contacts)
        {
            _applicationDbContext.Contacts.AddRange(contacts);
            _applicationDbContext.SaveChanges();
            return contacts;
        }

        public void Delete(Contact contact)
        {
            _applicationDbContext.Remove(contact);
            _applicationDbContext.SaveChanges();
        }

        public void DeleteSerial(IEnumerable<Contact> contacts)
        {
            _applicationDbContext.RemoveRange(contacts);
            _applicationDbContext.SaveChanges();
        }

        public IEnumerable<Contact> GetAll()
        {
            return _applicationDbContext.Contacts;
        }

        public Contact GetById(int id)
        {
            return _applicationDbContext.Contacts.SingleOrDefault(p => p.Id == id);
        }

        public void Update(Contact contact)
        {
            _applicationDbContext.Update(contact);
            _applicationDbContext.SaveChanges();
        }

        public void UpdateSerial(IEnumerable<Contact> contacts)
        {
            _applicationDbContext.UpdateRange(contacts);
            _applicationDbContext.SaveChanges();
        }
    }
}
