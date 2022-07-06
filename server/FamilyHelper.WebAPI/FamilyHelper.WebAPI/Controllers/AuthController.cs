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
    [Route("[controller]")]
    public class AuthController : Controller
    {
        private readonly AppDbContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AuthController(UserManager<AppUser> userManager,
            ITokenService tokenService,
            IConfiguration configuration,
            IMapper mapper,
            AppDbContext context)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _configuration = configuration;
            _mapper = mapper;
            _context = context;
        }

        [AllowAnonymous]
        [Route("login")]
        [HttpPost]
        public async Task<ActionResult<AuthorizedUser>> Login([FromBody] LoginViewModel loginModel)
        {
            if (string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest();
            }

            var user = await _context.Users.Include(u => u.UserInfo).FirstOrDefaultAsync(u => u.Email == loginModel.Email);
            if (user == null)
            {
                return NotFound();
            }

            var result = await _userManager.CheckPasswordAsync(_mapper.Map<AppUser>(user), loginModel.Password);
            if (result)
            {
                var token = await _tokenService
                    .BuildTokenAsync(_configuration["Jwt:Key"].ToString(),
                        _configuration["Jwt:Issuer"].ToString(),
                        user);

                if (token != null)
                {

                    return new AuthorizedUser { FirstName = user.UserInfo?.FirstName, Token = token };
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
        public async Task<ActionResult<string>> Register([FromBody] RegisterViewModel registerModel)
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
            if (saveResult == 0)
            {
                return Problem();
            }

            var token = await _tokenService
                    .BuildTokenAsync(_configuration["Jwt:Key"].ToString(),
                        _configuration["Jwt:Issuer"].ToString(),
                        user);

            return token;
        }
    }
}
