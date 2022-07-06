namespace FamilyHelper.Core
{
    public class FamilyList
    {
        public Guid FamilyListId { get; set; } = Guid.NewGuid();
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
        public string Name { get; set; }

        public ICollection<ListItem>? ListItems { get; set; }

        public Guid CreatorId { get; set; }
        public User Creator { get; set; }

        public Guid FamilyId { get; set; }
        public Family Family { get; set; }
    }
}
