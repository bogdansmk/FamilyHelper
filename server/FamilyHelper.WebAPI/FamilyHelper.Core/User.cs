namespace FamilyHelper.Core
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Email { get; set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }

        public Guid? FamilyId { get; set; }

        public Geolocation Geolocation { get; set; }
        public UserSubscription UserSubscription { get; set; }
        public UserInfo UserInfo { get; set; }

        public ICollection<Role> Roles { get; set; }
    }
}
