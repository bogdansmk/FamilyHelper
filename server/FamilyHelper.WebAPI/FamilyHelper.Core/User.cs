namespace FamilyHelper.Core
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }

        public Guid GeolocationId { get; set; }
        public Geolocation Geolocation { get; set; }

        public Guid UserSubscriptionId { get; set; }
        public UserSubscription UserSubscription { get; set; }

        public Guid UserInfoId { get; set; }
        public UserInfo UserInfo { get; set; }

        public ICollection<Role> Roles { get; set; }
    }
}
