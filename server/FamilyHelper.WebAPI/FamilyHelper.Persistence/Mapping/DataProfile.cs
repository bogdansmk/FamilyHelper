using AutoMapper;
using FamilyHelper.Core;
using FamilyHelper.Persistence.Entities;

namespace FamilyHelper.Persistence.Mapping
{
    public class DataProfile : Profile
    {
        public DataProfile()
        {
            CreateMap<User, AppUser>().ConstructUsing(u => new AppUser
            {
                Id = u.Id,
                FirstName = u.FirstName,
                LastName = u.LastName,
                UserName = u.UserName,
                PasswordHash = u.PasswordHash,
                Email = u.Email
            });

            CreateMap<AppUser, User>().ConstructUsing(au => new User
            {
                Id = au.Id,
                FirstName = au.FirstName,
                LastName = au.LastName,
                UserName = au.UserName,
                PasswordHash = au.PasswordHash,
                Email= au.Email
            });
        }
    }
}
