namespace FamilyHelper.Core
{
    public class UserSubscription
    {
        public Guid UserSubscriptonId { get; set; } = Guid.NewGuid();
        public DateTime PurchaseDate { get; set; }
        public DateTime ExpireDate { get; set; }

        public Guid SubscriptionPlanId { get; set; }
        public SubscriptionPlan SubscriptionPlan { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
