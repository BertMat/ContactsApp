using AutoMapper;
using ContactsAppAPI.Application.Dtos;
using ContactsAppAPI.Application.Mappings;
using AutoMapper.EquivalencyExpression;
using ContactsAppAPI.Application.Services;
using ContactsAppAPI.Domain.Entities;
using ContactsAppAPI.Infrastructure.Data;
using System.Linq;
using ContactsAppAPI.Infrastructure.Repositories;
using ContactsAppAPI.Tests.Fixtures;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace ContactsAppAPI.Tests
{
    public class ContactServiceTests
    {
        private ApplicationDbContext dbContext;
        private static IMapper _mapper;
        public ContactServiceTests()
        {
            // AutoMapper setup
            if (_mapper == null)
            {
                var mappingConfig = new MapperConfiguration(mc =>
                {
                    mc.AddCollectionMappers();
                    mc.AddProfile(new MappingProfile());
                });
                IMapper mapper = mappingConfig.CreateMapper();
                _mapper = mapper;
            }

            // DB setup
            var options = new DbContextOptionsBuilder<ApplicationDbContext>().UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;

            dbContext = new ApplicationDbContext(options);
        }

        [Fact]
        public void Should_Get_Single_Contact()
        {
            // Arrange

            var newContact = ContactsFixture.CreateNewContact();
            dbContext.Contacts.Add(newContact);
            dbContext.SaveChanges();

            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);


            // Act

            var contact = service.GetSingleContactById(newContact.Id);

            // Assert
            contact.Should().NotBeNull();
        }

        [Fact]
        public void Should_Get_Empty_List_of_Contacts()
        {
            // Arrange
            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            // Act
            var result = service.GetAllContacts();

            // Assert
            Assert.NotNull(result);
            Assert.Empty(result);
        }

        [Fact]
        public void Should_Get_List_of_Contacts()
        {
            // Arrange
            dbContext.Contacts.AddRange(ContactsFixture.CreateNewContactList());
            dbContext.SaveChanges();
            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            // Act
            var result = service.GetAllContacts();

            // Assert
            result.Should().NotBeNull();
            result.Should().NotBeEmpty();
        }
        [Fact]
        public void Should_Add_New_Contact()
        {
            // Arrange
            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            var newContact = _mapper.Map<CreateContactDto>(ContactsFixture.CreateNewContact());

            // Act
            var result = service.AddNewContact(newContact);

            // Assert
            result.Should().NotBeNull();
        }

        [Fact]
        public void Should_Add_New_Contacts_Serial()
        {
            // Arrange
            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            var newContacts = _mapper.Map<IEnumerable<CreateContactDto>>(ContactsFixture.CreateNewContactList());

            // Act
            var result = service.AddNewContactSerial(newContacts);

            // Assert
            result.Should().NotBeNull();
            result.Should().NotBeEmpty();
        }

        [Fact]
        public void Should_Update_Contact()
        {
            // Arrange

            var newContact = ContactsFixture.CreateNewContact();
            dbContext.Contacts.Add(newContact);
            dbContext.SaveChanges();

            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);


            // Act
            var updatedContact = _mapper.Map<UpdateContactDto>(newContact);
            updatedContact.ApartmentNumber += "a";

            service.UpdateContact(updatedContact);

            var existingContact = service.GetSingleContactById(updatedContact.Id);

            // Assert
            existingContact.Should().NotBeNull();
            Assert.Equal(updatedContact.ApartmentNumber, existingContact.ApartmentNumber);
        }

        [Fact]
        public void Should_Update_Contact_Serial()
        {
            // Arrange

            var newContacts = ContactsFixture.CreateNewContactList();
            dbContext.Contacts.AddRange(newContacts);
            dbContext.SaveChanges();
            dbContext.ChangeTracker.Clear();

            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);


            // Act
            var updatedContacts = _mapper.Map<IEnumerable<UpdateContactDto>>(newContacts);
            updatedContacts.ToList().ForEach(p => p.FirstName += "a");

            service.UpdateContactSerial(updatedContacts);

            var existingContacts = service.GetContactsById(updatedContacts.Select(p => p.Id));

            // Assert
            existingContacts.Should().NotBeNull();
        }

        [Fact]
        public void Should_Delete_Contact()
        {
            // Arrange

            var newContact = ContactsFixture.CreateNewContact();
            dbContext.Contacts.Add(newContact);
            dbContext.SaveChanges();

            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            // Act

            service.DeleteContact(1);

            var anyContacts = service.GetAllContacts();

            // Assert
            anyContacts.Should().BeEmpty();
        }

        [Fact]
        public void Should_Delete_Contact_Serial()
        {
            // Arrange

            var newContacts = ContactsFixture.CreateNewContactList();
            dbContext.Contacts.AddRange(newContacts);
            dbContext.SaveChanges();
            dbContext.ChangeTracker.Clear();

            var repository = new Mock<ContactRepository>(dbContext);

            var service = new ContactService(repository.Object, _mapper);

            // Act

            service.DeleteContactSerial(new List<int> { 1, 2 });

            var anyContacts = service.GetAllContacts();

            // Assert
            anyContacts.Should().BeEmpty();
        }
    }
}
