using ContactsAppAPI.Application;
using ContactsAppAPI.Infrastructure;
namespace ContactsAppAPI.API.Installers
{
    public static class ArchitectureInstaller
    {
        public static void InstallServicesInAssembly(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddInfrastructure(configuration);
            services.AddApplication();
            services.AddControllers();
        }
    }
}
