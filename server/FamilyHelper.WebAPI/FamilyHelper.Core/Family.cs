namespace FamilyHelper.Core
{
    public class Family
    {
        public Guid FamilyId { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public ICollection<User> Members { get; set; }
        public ICollection<FamilyList> FamilyLists { get; set; }
    }
}
