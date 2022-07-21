using ContactsAppAPI.Domain.Interfaces;
using ContactsAppAPI.Infrastructure.Data;
using ContactsAppAPI.Infrastructure.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace ContactsAppAPI.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddScoped<IContactRepository, ContactRepository>();
            services.AddDbContext<ApplicationDbContext>();

            return services;
        }

    }
}
