namespace FamilyHelper.Core
{
    public class Family
    {
        public Guid FamilyId { get; set; }
        public string Name { get; set; }
        public ICollection<User> Members { get; set; }
        public ICollection<FamilyList> FamilyLists { get; set; }
    }
}
