using AutoMapper;
using FamilyHelper.Core;
using FamilyHelper.Persistence.Entities;
using FamilyHelper.Services.Abstractions;
using FamilyHelper.WebAPI.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using FamilyHelper.Persistence;
using Microsoft.EntityFrameworkCore;

namespace FamilyHelper.WebAPI.Controllers
{
    [Route("api/auth")]
    public class AuthController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AuthController(UserManager<AppUser> userManager,
            ITokenService tokenService,
            IConfiguration configuration,
            IMapper mapper,
            AppDbContext context,
            SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _configuration = configuration;
            _mapper = mapper;
            _context = context;
            _signInManager = signInManager;
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public async Task<ActionResult<string>> Login([FromBody]LoginViewModel loginModel)
        {
            if (string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest();
            }

            var result = await _signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password, true, false);

            if (result.Succeeded)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginModel.Email);
                if (user == null)
                {
                    return NotFound();
                }

                var token = await _tokenService
                    .BuildTokenAsync(_configuration["Jwt:Key"].ToString(),
                        _configuration["Jwt:Issuer"].ToString(),
                        user);

                if (token != null)
                {
                    // HttpContext.Session.SetString("Token", token);
                    return Ok(token);
                }
                else
                {
                    return Problem();
                }
            }
            else
            {
                return Unauthorized();
            }
        }

        [AllowAnonymous]
        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel registerModel)
        {
            if (string.IsNullOrEmpty(registerModel.Email)
                || string.IsNullOrEmpty(registerModel.Password)
                || string.IsNullOrEmpty(registerModel.RepeatPassword)
                || string.IsNullOrEmpty(registerModel.FirstName)
                || registerModel.Password != registerModel.RepeatPassword)
            {
                return BadRequest();
            }

            var userId = Guid.NewGuid();
            var user = new User()
            {
                Id = userId,
                Email = registerModel.Email,
                UserName = registerModel.Email,
            };

            var result = await _userManager.CreateAsync(_mapper.Map<AppUser>(user), registerModel.Password);
            if (!result.Succeeded)
            {
                return Problem();
            }

            //var subscriptionPlan = await _context.SubscriptionPlans.FirstOrDefaultAsync(sp => sp.Name == "Basic");
            //if (subscriptionPlan is null)
            //{
            //    return Problem();
            //}

            var userInfo = new UserInfo()
            {
                UserId = userId,
                FirstName = registerModel.FirstName
            };
            var geolocation = new Geolocation()
            {
                UserId = userId
            };
            //var userSubscription = new UserSubscription()
            //{
            //    SubscriptionPlanId = subscriptionPlan.SubscriptionPlanId,
            //    UserId = userId,
            //};
            _context.Set<UserInfo>().Add(userInfo);
            _context.Set<Geolocation>().Add(geolocation);
            //_context.Set<UserSubscription>().Add(userSubscription);

            var saveResult = await _context.SaveChangesAsync();
            if (saveResult == 2)
            {
                return Ok();
            }

            return Problem();
        }
    }
}
