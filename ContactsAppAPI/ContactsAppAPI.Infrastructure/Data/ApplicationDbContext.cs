using ContactsAppAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ContactsAppAPI.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data Source=Contacts.db");
        }
        public DbSet<Contact> Contacts { get; set; }
    }
}
