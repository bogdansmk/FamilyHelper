namespace FamilyHelper.Core
{
    public class SubscriptionPlan
    {
        public Guid SubscriptionPlanId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public float PricePerMonth { get; set; }
        public int MaxFamilyMembers { get; set; }
        public int MaxSharedLists { get; set; }
    }
}
