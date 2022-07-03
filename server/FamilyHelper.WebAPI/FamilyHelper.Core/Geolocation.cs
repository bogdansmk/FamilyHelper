namespace FamilyHelper.Core
{
    public class Geolocation
    {
        public Guid GeolocationId { get; set; } = Guid.NewGuid();
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
