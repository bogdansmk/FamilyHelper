from django.contrib import admin
from django.contrib.auth.models import User, Group

from .models import Families, Familylists, Geolocation, Subscriptionplans, Roles, Listitem, Userinfo, Users, \
    Usersubscription


admin.site.unregister(User)
admin.site.unregister(Group)


@admin.register(Families)
class FamiliesAdmin(admin.ModelAdmin):
    fields = ['familyid', 'name']
    read_only_fields = ['familyid']


@admin.register(Familylists)
class FamilylistsAdmin(admin.ModelAdmin):
    fields = ['familylistid', 'datecreated', 'creatorid', 'familyid']
    read_only_fields = ['familylistid']


@admin.register(Geolocation)
class GeolocationAdmin(admin.ModelAdmin):
    fields = ['geolocationid', 'latitude', 'longitude', 'userid']
    read_only_fields = ['geolocationid']


@admin.register(Listitem)
class ListitemAdmin(admin.ModelAdmin):
    fields = ['listitemid', 'text', 'datecreated', 'datedone', 'orderplace', 'isdone', 'familylistid']
    read_only_fields = ['listitemid']


@admin.register(Roles)
class RolesAdmin(admin.ModelAdmin):
    fields = ['id', 'name', 'normalizedname', 'concurrencystamp', 'appuserid', 'userid']
    read_only_fields = ['id']


@admin.register(Subscriptionplans)
class SubscriptionplansAdmin(admin.ModelAdmin):
    fields = ['subscriptionplanid', 'name', 'description', 'pricepermonth', 'maxfamilymembers', 'maxsharedlists']
    read_only_fields = ['subscriptionplanid']


@admin.register(Userinfo)
class UserinfoAdmin(admin.ModelAdmin):
    fields = ['userinfoid', 'tag', 'status', 'birthdate', 'avatar', 'firstname', 'lastname', 'userid']
    read_only_fields = ['userinfoid']


@admin.register(Users)
class UsersAdmin(admin.ModelAdmin):
    fields = ['id', 'familyid', 'email', 'username', 'passwordhash', 'normalizedusername', 'normalizedemail', 'emailconfirmed', 'securitystamp', 'concurrencystamp', 'phonenumber', 'phonenumberconfirmed', 'twofactorenabled', 'lockoutend', 'lockoutenabled', 'accessfailedcount']
    read_only_fields = ['id']


@admin.register(Usersubscription)
class UsersubscriptionAdmin(admin.ModelAdmin):
    fields = ['usersubscriptonid', 'purchasedate', 'expiredate', 'subscriptionplanid', 'userid']
    read_only_fields = ['usersubscriptonid']
