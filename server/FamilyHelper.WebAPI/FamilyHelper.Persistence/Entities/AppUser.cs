using FamilyHelper.Core;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace FamilyHelper.Persistence.Entities
{
    public class AppUser : IdentityUser<Guid>, IUser<Guid>
    {
        public Guid? FamilyId { get; set; }

        public ICollection<IdentityRole<Guid>> Roles { get; set; }
    }
}
