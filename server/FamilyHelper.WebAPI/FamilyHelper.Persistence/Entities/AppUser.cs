using FamilyHelper.Core;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;

namespace FamilyHelper.Persistence.Entities
{
    public class AppUser : IdentityUser<Guid>, IUser<Guid>
    {
        public ICollection<IdentityRole<Guid>> Roles { get; set; }
        
        public Guid GeolocationId { get; set; }
        public Geolocation Geolocation { get; set; }

        public Guid UserSubscriptionId { get; set; }
        public UserSubscription UserSubscription { get; set; }

        public Guid UserInfoId { get; set; }
        public UserInfo UserInfo { get; set; }
    }
}
