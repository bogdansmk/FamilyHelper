using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FamilyHelper.Core
{
    public class UserInfo
    {
        public Guid UserInfoId { get; set; }
        public string Tag { get; set; }
        public string Status { get; set; }
        public DateTime BirthDate { get; set; }
        public string Avatar { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Guid UserId { get; set; }
    }
}
