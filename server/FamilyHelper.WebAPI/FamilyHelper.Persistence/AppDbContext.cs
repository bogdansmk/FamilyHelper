using FamilyHelper.Persistence.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FamilyHelper.Persistence
{
    public class AppDbContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }
    }
}
