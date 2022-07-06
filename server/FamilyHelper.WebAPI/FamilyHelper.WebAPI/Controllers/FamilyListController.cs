using FamilyHelper.Persistence;
using FamilyHelper.Persistence.Entities;
using FamilyHelper.WebAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using FamilyHelper.Core;
using Microsoft.EntityFrameworkCore;

namespace FamilyHelper.WebAPI.Controllers
{
    [Route("familylists")]
    public class FamilyListController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;

        public FamilyListController(AppDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> AddFamilyList([FromBody] AddFamilyListViewModel model)
        {
            var familyIdStr = User.Claims.FirstOrDefault(c => c.Type == "FamilyId")?.Value;
            var email = User.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
            if (!Guid.TryParse(familyIdStr, out var familyId))
            {
                return BadRequest();
            }

            var user = await _userManager.FindByEmailAsync(email);
            if (user is null)
            {
                return BadRequest();
            }


            _context.FamilyLists.Add(new FamilyList
            {
                FamilyId = familyId,
                Name = model.Name,
                DateCreated = DateTime.UtcNow,
                CreatorId = user.Id
            });

            await _context.SaveChangesAsync();

            return Ok();
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FamilyList>>> GetFamilyLists()
        {
            var familyIdStr = User.Claims.FirstOrDefault(c => c.Type == "FamilyId")?.Value;
            if (!Guid.TryParse(familyIdStr, out var familyId))
            {
                return BadRequest();
            }

            var family = await _context.Families
                .Include(f => f.FamilyLists)
                .FirstOrDefaultAsync(f => f.FamilyId == familyId);

            return Ok(family?.FamilyLists);
        }
    }
}
