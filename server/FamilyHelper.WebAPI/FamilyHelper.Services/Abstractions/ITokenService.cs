using FamilyHelper.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FamilyHelper.Services.Abstractions
{
    public interface ITokenService
    {
        Task<string> BuildTokenAsync(string key, string issuer, User user);
    }
}
