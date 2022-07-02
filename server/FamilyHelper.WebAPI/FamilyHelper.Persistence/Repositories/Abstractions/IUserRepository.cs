using FamilyHelper.Core;

namespace FamilyHelper.Persistence.Repositories.Abstractions
{
    public interface IUserRepository
    {
        public Task<User> GetByEmail(string email);

        public Task<User> GetByIdAsync(Guid id);

        public Task CreateAsync(User user, string password);

        public Task UpdateAsync(User user);

        public Task DeleteAsync(Guid id);
    }
}
