using ContactsAppAPI.Application.Interfaces;
using ContactsAppAPI.Application.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ContactsAppAPI.Application
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddApplication(this IServiceCollection services)
        {
            services.AddScoped<IContactService, ContactService>();
            services.AddAutoMapper(Assembly.GetExecutingAssembly());

            return services;
        }

    }
}
