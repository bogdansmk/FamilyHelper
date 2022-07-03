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
                UserName = u.UserName,
                PasswordHash = u.PasswordHash,
                Email = u.Email
            })
                .ForMember(au => au.Roles, opt => opt.MapFrom(u => u.Roles))
                .ForMember(dest => dest.UserSubscription, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.UserSubscription = src.UserSubscription;
                })
                .ForMember(dest => dest.Geolocation, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.Geolocation = src.Geolocation;
                })
                .ForMember(dest => dest.UserInfo, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.UserInfo = src.UserInfo;
                });

            CreateMap<AppUser, User>().ConstructUsing(au => new User
            {
                Id = au.Id,
                UserName = au.UserName,
                PasswordHash = au.PasswordHash,
                Email= au.Email
            })
                .ForMember(u => u.Roles, opt => opt.MapFrom(au => au.Roles))
                .ForMember(dest => dest.UserSubscription, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.UserSubscription = src.UserSubscription;
                })
                .ForMember(dest => dest.Geolocation, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.Geolocation = src.Geolocation;
                })
                .ForMember(dest => dest.UserInfo, opt => opt.Ignore())
                .AfterMap((src, dest) =>
                {
                    dest.UserInfo = src.UserInfo;
                });
        }
    }
}
