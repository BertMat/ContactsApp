using ContactsAppAPI.Infrastructure;
namespace ContactsAppAPI.API.Installers
{
    public static class ArchitectureInstaller
    {
        public static void InstallServicesInAssembly(this IServiceCollection services)
        {
            services.AddInfrastructure();
            services.AddControllers();
        }
    }
}
