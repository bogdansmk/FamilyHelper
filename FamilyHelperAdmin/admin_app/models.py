import uuid

from django.db import models


class BaseModel:
    def save(self, *args, **kwargs):
        if self.familyid is None:
            self.familyid = uuid.uuid4()
        super().save(*args, **kwargs)


class Families(models.Model, BaseModel):
    familyid = models.CharField(db_column='FamilyId', primary_key=True, max_length=36)
    name = models.TextField(db_column='Name')

    def __str__(self):
        return self.name

    class Meta:
        managed = True
        db_table = 'Families'
        verbose_name = 'Family'
        verbose_name_plural = 'Families'


class Familylists(models.Model, BaseModel):
    familylistid = models.CharField(db_column='FamilyListId', primary_key=True, max_length=36)
    datecreated = models.DateTimeField(db_column='DateCreated')
    creatorid = models.ForeignKey('Users', models.DO_NOTHING, db_column='CreatorId')
    familyid = models.ForeignKey(Families, models.DO_NOTHING, db_column='FamilyId')

    def __str__(self):
        return f'Family Lists of family {self.familyid.name}'

    class Meta:
        managed = False
        db_table = 'FamilyLists'
        verbose_name = 'Family List'
        verbose_name_plural = 'Families\' Lists'


class Geolocation(models.Model, BaseModel):
    geolocationid = models.CharField(db_column='GeolocationId', primary_key=True, max_length=36)
    latitude = models.DecimalField(db_column='Latitude', max_digits=18, decimal_places=2)
    longitude = models.DecimalField(db_column='Longitude', max_digits=18, decimal_places=2)
    userid = models.OneToOneField('Users', models.DO_NOTHING, db_column='UserId')

    def __str__(self):
        return f'Geolocation of {self.userid.name}'

    class Meta:
        managed = False
        db_table = 'Geolocation'
        verbose_name = 'Geolocation'
        verbose_name_plural = 'Geolocations'


class Listitem(models.Model, BaseModel):
    listitemid = models.CharField(db_column='ListItemId', primary_key=True, max_length=36)
    text = models.TextField(db_column='Text')
    datecreated = models.DateTimeField(db_column='DateCreated')
    datedone = models.DateTimeField(db_column='DateDone', blank=True, null=True)
    orderplace = models.IntegerField(db_column='OrderPlace')
    isdone = models.BooleanField(db_column='IsDone')
    familylistid = models.ForeignKey(Familylists, models.DO_NOTHING, db_column='FamilyListId')

    def __str__(self):
        return f'Item of list {self.familylistid}: {self.text}'

    class Meta:
        managed = False
        db_table = 'ListItem'
        verbose_name = 'List Item'
        verbose_name_plural = 'List Items'


class Roles(models.Model, BaseModel):
    id = models.CharField(db_column='Id', primary_key=True, max_length=36)
    name = models.CharField(db_column='Name', max_length=256, blank=True, null=True)
    normalizedname = models.CharField(db_column='NormalizedName', unique=True, max_length=256, blank=True, null=True)
    concurrencystamp = models.TextField(db_column='ConcurrencyStamp', blank=True, null=True)
    appuserid = models.ForeignKey('Users', models.DO_NOTHING, db_column='AppUserId', blank=True, null=True, related_name='foo')
    userid = models.ForeignKey('Users', models.DO_NOTHING, db_column='UserId', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        managed = False
        db_table = 'Roles'
        verbose_name = 'Role'
        verbose_name_plural = 'Roles'


class Subscriptionplans(models.Model, BaseModel):
    subscriptionplanid = models.CharField(db_column='SubscriptionPlanId', primary_key=True, max_length=36)
    name = models.TextField(db_column='Name')
    description = models.TextField(db_column='Description')
    pricepermonth = models.FloatField(db_column='PricePerMonth')
    maxfamilymembers = models.IntegerField(db_column='MaxFamilyMembers')
    maxsharedlists = models.IntegerField(db_column='MaxSharedLists')

    def __str__(self):
        return self.name

    class Meta:
        managed = False
        db_table = 'SubscriptionPlans'
        verbose_name = 'Subscription Plan'
        verbose_name_plural = 'Subscription Plans'


class Userinfo(models.Model, BaseModel):
    userinfoid = models.CharField(db_column='UserInfoId', primary_key=True, max_length=36)
    tag = models.TextField(db_column='Tag', blank=True, null=True)
    status = models.TextField(db_column='Status', blank=True, null=True)
    birthdate = models.DateTimeField(db_column='BirthDate')
    avatar = models.TextField(db_column='Avatar', blank=True, null=True)
    firstname = models.TextField(db_column='FirstName')
    lastname = models.TextField(db_column='LastName', blank=True, null=True)
    userid = models.OneToOneField('Users', models.DO_NOTHING, db_column='UserId')

    def __str__(self):
        return f'User info of {self.userid.username}'

    class Meta:
        managed = False
        db_table = 'UserInfo'
        verbose_name = 'User Info'
        verbose_name_plural = 'Users Info'


class Usersubscription(models.Model, BaseModel):
    usersubscriptonid = models.CharField(db_column='UserSubscriptonId', primary_key=True, max_length=36)
    purchasedate = models.DateTimeField(db_column='PurchaseDate')
    expiredate = models.DateTimeField(db_column='ExpireDate')
    subscriptionplanid = models.ForeignKey(Subscriptionplans, models.DO_NOTHING, db_column='SubscriptionPlanId')
    userid = models.OneToOneField('Users', models.DO_NOTHING, db_column='UserId')

    def __str__(self):
        return f'Subscription of user {self.userid.username}'

    class Meta:
        managed = False
        db_table = 'UserSubscription'
        verbose_name = 'User Subscription'
        verbose_name_plural = 'Users Subscriptions'


class Users(models.Model, BaseModel):
    id = models.CharField(db_column='Id', primary_key=True, max_length=36)
    familyid = models.ForeignKey(Families, models.DO_NOTHING, db_column='FamilyId', blank=True, null=True)
    email = models.CharField(db_column='Email', max_length=256, blank=True, null=True)
    username = models.CharField(db_column='UserName', max_length=256, blank=True, null=True)
    passwordhash = models.TextField(db_column='PasswordHash', blank=True, null=True)
    normalizedusername = models.CharField(db_column='NormalizedUserName', unique=True, max_length=256, blank=True, null=True)
    normalizedemail = models.CharField(db_column='NormalizedEmail', max_length=256, blank=True, null=True)
    emailconfirmed = models.BooleanField(db_column='EmailConfirmed')
    securitystamp = models.TextField(db_column='SecurityStamp', blank=True, null=True)
    concurrencystamp = models.TextField(db_column='ConcurrencyStamp', blank=True, null=True)
    phonenumber = models.TextField(db_column='PhoneNumber', blank=True, null=True)
    phonenumberconfirmed = models.BooleanField(db_column='PhoneNumberConfirmed')
    twofactorenabled = models.BooleanField(db_column='TwoFactorEnabled')
    lockoutend = models.TextField(db_column='LockoutEnd', blank=True, null=True)
    lockoutenabled = models.BooleanField(db_column='LockoutEnabled')
    accessfailedcount = models.IntegerField(db_column='AccessFailedCount')

    def __str__(self):
        return self.username

    class Meta:
        managed = False
        db_table = 'Users'
        verbose_name = 'User'
        verbose_name_plural = 'Users'
