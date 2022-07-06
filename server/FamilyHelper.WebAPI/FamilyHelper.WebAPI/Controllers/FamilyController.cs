using FamilyHelper.Persistence;
using FamilyHelper.Persistence.Entities;
using FamilyHelper.WebAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<IActionResult> AddMember([FromBody]AddMemberViewModel model)
        {
            /*
            User.Identity.

            var user = _userManager.FindByEmailAsync(model.Email);
            if (user is null)
            {
                return NotFound();
            }
            */
            

            return Ok("pong");
        }

        [Authorize]
        [HttpGet]
        [Route("members")]
        public async Task<IActionResult> GetMembers()
        {
            return Ok("ping");
        }
    }
}
