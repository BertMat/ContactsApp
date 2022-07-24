using ContactsAppAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ContactsAppAPI.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
