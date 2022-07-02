using AutoMapper;
using FamilyHelper.Core;
using FamilyHelper.Persistence.Entities;
using FamilyHelper.Persistence.Repositories.Abstractions;
using Microsoft.AspNet.Identity;

namespace FamilyHelper.Persistence.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<AppUser, Guid> _userManager;
        private readonly IMapper _mapper;

        public UserRepository(UserManager<AppUser, Guid> userManager, IMapper mapper)
        {
            _userManager = userManager;
            _mapper = mapper;
        }

        public async Task CreateAsync(User user, string password)
        {
            await _userManager.CreateAsync(_mapper.Map<AppUser>(user), password);
        }

        public async Task DeleteAsync(Guid id)
        {
            var user = await _userManager.FindByIdAsync(id);

            await _userManager.DeleteAsync(user);
        }

        public async Task<User> GetByEmail(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);

            return _mapper.Map<User>(user);
        }

        public async Task<User> GetByIdAsync(Guid id)
        {
            var user = await _userManager.FindByIdAsync(id);

            return _mapper.Map<User>(user);
        }

        public async Task UpdateAsync(User user)
        {
            var appUser = _mapper.Map<AppUser>(user);

            await _userManager.UpdateAsync(appUser);
        }
    }
}
