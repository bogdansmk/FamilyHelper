using FamilyHelper.Core;
using FamilyHelper.Persistence;
using FamilyHelper.Persistence.Entities;
using FamilyHelper.WebAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FamilyHelper.WebAPI.Controllers
{
    [Route("[controller]")]
    public class FamilyController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;

        public FamilyController(AppDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [Authorize]
        [HttpPost]
        [Route("members")]
        public async Task<IActionResult> AddMember([FromBody] AddMemberViewModel model)
        {
            var familyIdStr = User.Claims.FirstOrDefault(c => c.Type == "FamilyId")?.Value;
            if (!Guid.TryParse(familyIdStr, out var familyId))
            {
                return BadRequest();
            }

            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user is null)
            {
                return NotFound();
            }

            user.FamilyId = familyId;

            await _context.SaveChangesAsync();

            return Ok();
        }

        [Authorize]
        [HttpGet]
        [Route("members")]
        public async Task<ActionResult<IEnumerable<User>>> GetMembers()
        {
            var familyIdStr = User.Claims.FirstOrDefault(c => c.Type == "FamilyId")?.Value;
            if (!Guid.TryParse(familyIdStr, out var familyId))
            {
                return BadRequest();
            }

            var family = await _context.Families
                .Include(f => f.Members)
                .Include("Members.UserInfo")
                .FirstOrDefaultAsync(f => f.FamilyId == familyId);

            return Ok(family?.Members);
        }
    }
}
