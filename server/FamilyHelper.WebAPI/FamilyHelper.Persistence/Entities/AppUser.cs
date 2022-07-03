﻿using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FamilyHelper.Persistence.Entities
{
    public class AppUser : IdentityUser<Guid>, IUser<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}