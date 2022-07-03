using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FamilyHelper.Core
{
    public class ListItem
    {
        public Guid ListItemId { get; set; } = Guid.NewGuid();
        public string Text { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
        public DateTime? DateDone { get; set; }
        public int OrderPlace { get; set; }
        public bool IsDone { get; set; }

        public Guid FamilyListId { get; set; }
        public FamilyList FamilyList { get; set; }
    }
}
