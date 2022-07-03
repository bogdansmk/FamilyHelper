using FamilyHelper.Core;
using FamilyHelper.Persistence.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FamilyHelper.Persistence
{
    public class AppDbContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Family> Families { get; set; }
        public DbSet<SubscriptionPlan> SubscriptionPlans { get; set; }
        public DbSet<FamilyList> FamilyLists { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(u =>
            {
                u.ToTable("Users");
                u.HasKey(u => u.Id);
                u.Property(u => u.FamilyId).HasColumnName("FamilyId");
                u.Property(u => u.Email).HasColumnName("Email");
                u.Property(u => u.UserName).HasColumnName("UserName");
                u.Property(u => u.PasswordHash).HasColumnName("PasswordHash");
            });

            modelBuilder.Entity<AppUser>(u =>
            {
                u.ToTable("Users");
                u.HasKey(u => u.Id);
                u.Property(u => u.FamilyId).HasColumnName("FamilyId");
                u.Property(u => u.Email).HasColumnName("Email");
                u.Property(u => u.UserName).HasColumnName("UserName");
                u.Property(u => u.PasswordHash).HasColumnName("PasswordHash");
            });

            modelBuilder.Entity<Role>(r =>
            {
                r.ToTable("Roles");
                r.HasKey(r => r.Id);
                r.Property(r => r.Name).HasColumnName("Name");
                r.Property(r => r.NormalizedName).HasColumnName("NormalizedName");
            });

            modelBuilder.Entity<IdentityRole<Guid>>(r =>
            {
                r.ToTable("Roles");
                r.HasKey(r => r.Id);
                r.Property(r => r.Name).HasColumnName("Name");
                r.Property(r => r.NormalizedName).HasColumnName("NormalizedName");
            });

            modelBuilder.Entity<UserSubscription>()
                .HasKey(us => us.UserSubscriptonId);

            modelBuilder.Entity<Family>()
                .HasKey(f => f.FamilyId);

            modelBuilder.Entity<UserInfo>()
                .HasKey(ui => ui.UserInfoId);

            modelBuilder.Entity<Geolocation>()
                .HasKey(g => g.GeolocationId);

            modelBuilder.Entity<FamilyList>()
                .HasKey(fl => fl.FamilyListId);

            modelBuilder.Entity<ListItem>()
                .HasKey(li => li.ListItemId);

            modelBuilder.Entity<User>()
                .ToTable("Users")
                .HasOne<AppUser>().WithOne().HasForeignKey<User>(u => u.Id);

            modelBuilder.Entity<Role>()
                .ToTable("Roles")
                .HasOne<IdentityRole<Guid>>().WithOne().HasForeignKey<Role>(u => u.Id);

            modelBuilder.Entity<User>()
                .HasOne(u => u.Geolocation)
                .WithOne(g => g.User)
                .HasForeignKey<Geolocation>(g => g.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<User>()
                .HasOne(u => u.UserSubscription)
                .WithOne(us => us.User)
                .HasForeignKey<UserSubscription>(us => us.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<User>()
                .HasOne(u => u.UserInfo)
                .WithOne(ui => ui.User)
                .HasForeignKey<UserInfo>(ui => ui.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Family>()
                .HasMany(f => f.Members)
                .WithOne()
                .HasForeignKey(u => u.FamilyId);

            modelBuilder.Entity<Family>()
                .HasMany(f => f.FamilyLists)
                .WithOne(l => l.Family)
                .HasForeignKey(l => l.FamilyId);

            modelBuilder.Entity<FamilyList>()
                .HasMany(fl => fl.ListItems)
                .WithOne(li => li.FamilyList)
                .HasForeignKey(fl => fl.FamilyListId);

            modelBuilder.Entity<UserSubscription>()
                .HasOne(us => us.SubscriptionPlan)
                .WithMany()
                .HasForeignKey(us => us.SubscriptionPlanId);
        }
    }
}
