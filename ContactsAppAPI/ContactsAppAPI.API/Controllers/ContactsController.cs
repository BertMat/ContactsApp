using ContactsAppAPI.Application.Dtos;
using ContactsAppAPI.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ContactsAppAPI.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            this._contactService = contactService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] List<int>? ids = null)
        {
            var data = ids.Any() ? _contactService.GetContactsById(ids) : _contactService.GetAllContacts();
            return Ok(data);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var data = _contactService.GetSingleContactById(id);

            return data != null ? Ok(data) : NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Create(CreateContactDto contact)
        {
            var newContact = _contactService.AddNewContact(contact);

            return newContact != null ? Ok(newContact) : BadRequest();
        }
        [HttpPost("Serial")]
        public async Task<IActionResult> CreateSerial(List<CreateContactDto> contacts)
        {
            var newContacts = _contactService.AddNewContactSerial(contacts);

            return newContacts != null ? Ok(newContacts) : BadRequest();
        }

        [HttpPut]
        public async Task<IActionResult> Update(UpdateContactDto contact)
        {
            if (!ContactExists(contact.Id))
            {
                return NotFound();
            }
            _contactService.UpdateContact(contact);

            return NoContent();
        }
        [HttpPut("Serial")]
        public async Task<IActionResult> UpdateSerial(List<UpdateContactDto> contacts)
        {
            _contactService.UpdateContactSerial(contacts);

            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            _contactService.DeleteContact(id);

            return NoContent();
        }
        [HttpDelete("Serial")]
        public async Task<IActionResult> DeleteSerial([FromQuery] List<int> ids)
        {
            _contactService.DeleteContactSerial(ids);

            return NoContent();
        }
        private bool ContactExists(int id)
        {
            return _contactService.GetSingleContactById(id) != null;
        }
    }
}