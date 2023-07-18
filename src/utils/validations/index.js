const joi = require('@hapi/joi')

const registerValidation = data => {
    const register = {
        firstName: joi.string().trim().required().error(() => {
            return { message: 'Firstname is not allowed to be empty' };
        }),
        lastName: joi.string().trim().required().error(() => {
            return { message: 'Lastname is not allowed to be empty' };
        }),
        emailId: joi.string().trim().required().email().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'EmailId is not allowed to be empty' };
                    case 'string.email': return { message: 'EmailId must be a valid email address' };
                }
            });
        }),
        phoneNumber: joi.string().trim().min(10).max(10).required().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Phone number is not allowed to be empty' };
                    case 'string.min': return { message: 'Phone number must be not less than 10 digit' };
                    case 'string.max': return { message: 'Phone number must be not more than 10 digit' };
                }
            });
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, register);
}

const addUserValidation = data => {
    const addUser = {
        firstName: joi.string().trim().required().error(() => {
            return { message: 'Firstname is not allowed to be empty' };
        }),
        lastName: joi.string().trim().required().error(() => {
            return { message: 'Lastname is not allowed to be empty' };
        }),
        emailId: joi.string().trim().required().email().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'EmailId is not allowed to be empty' };
                    case 'string.email': return { message: 'EmailId must be a valid email address' };
                }
            });
        }),
        phoneNumber: joi.string().trim().min(10).max(10).required().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Phone number is not allowed to be empty' };
                    case 'string.min': return { message: 'Phone number must be not less than 10 digit' };
                    case 'string.max': return { message: 'Phone number must be not more than 10 digit' };
                }
            });
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        countryId: joi.number().required().error(() => {
            return { message: 'Please select country name' };
        }),
        channelId: joi.number().required().error(() => {
            return { message: 'Please select channel name' };
        }),
        teamId: joi.number().required().error(() => {
            return { message: 'Please select team name' };
        }),
        roleId: joi.number().required().error(() => {
            return { message: 'Please select user type' };
        }),
        // statusId: joi.number().required().error(() => {
        //     return { message: 'Please select user status' };
        // }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addUser);
}

const editUserValidation = data => {
    const editUser = {
        registerId: joi.number().required().error(() => {
            return { message: 'RegisterId is required' };
        }),
        firstName: joi.string().trim().required().error(() => {
            return { message: 'Firstname is not allowed to be empty' };
        }),
        lastName: joi.string().trim().required().error(() => {
            return { message: 'LastName is not allowed to be empty' };
        }),
        emailId: joi.string().trim().required().email().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'EmailId is not allowed to be empty' };
                    case 'string.email': return { message: 'EmailId must be a valid email address' };
                }
            });
        }),
        phoneNumber: joi.string().trim().min(10).max(10).required().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Phone number is not allowed to be empty' };
                    case 'string.min': return { message: 'Phone number must be not less than 10 digit' };
                    case 'string.max': return { message: 'Phone number must be not more than 10 digit' };
                }
            });
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        countryId: joi.number().required().error(() => {
            return { message: 'Please select country name' };
        }),
        channelId: joi.number().required().error(() => {
            return { message: 'Please select channel name' };
        }),
        teamId: joi.number().required().error(() => {
            return { message: 'Please select team name' };
        }),
        roleId: joi.number().required().error(() => {
            return { message: 'Please select user type' };
        }),
        statusId: joi.number().required().error(() => {
            return { message: 'Please select user status' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editUser);
}

const loginValidation = data => {
    const login = {
        username: joi.string().trim().required().email().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Username is not allowed to be empty' };
                    case 'string.email': return { message: 'Username must be a valid email address' };
                }
            });
        }),
        password: joi.string().trim().min(8).required().error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Password is not allowed to be empty' };
                    case 'string.min': return { message: 'Password must be minimum 8 characters' };
                }
            });
        }),
    }
    return joi.validate(data, login);
}

const addChannelValidation = data => {
    const addChannel = {
        channelName: joi.string().trim().required().error(() => {
            return { message: 'Channel name is not allowed to be empty' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addChannel);
}

const editChannelValidation = data => {
    const editChannel = {
        channelId: joi.number().required().error(() => {
            return { message: 'ChannelId is required' };
        }),
        channelName: joi.string().trim().required().error(() => {
            return { message: 'Channel name is not allowed to be empty' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editChannel);
}

const addCompanyValidation = data => {
    const addCompany = {
        companyName: joi.string().trim().required().error(() => {
            return { message: 'Company name is not allowed to be empty' };
        }),
        domainExt: joi.string().trim().required().error(() => {
            return { message: 'Company domain extention is not allowed to be empty' };
        }),
        webUrl: joi.string().trim().required().error(() => {
            return { message: 'Company web url is not allowed to be empty' };
        }),
        address: joi.string().trim().required().error(() => {
            return { message: 'Company address is not allowed to be empty' };
        }),
        emailId: joi.string().trim().required().error(() => {
            return { message: 'Company email address is not allowed to be empty' };
        }),
        alternateEmailId: joi.optional().allow('').error(() => {
            return { message: 'Company alternate email address is not allowed to be empty' };
        }),
        phoneNumber: joi.string().trim().required().error(() => {
            return { message: 'Company phone number is not allowed to be empty' };
        }),
        alternatePhoneNumber: joi.optional().allow('').error(() => {
            return { message: 'Company alternate phone numnber is not allowed to be empty' };
        }),
        companyLogo: joi.optional().allow('').error(() => {
            return { message: 'Please upload company logo' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addCompany);
}

const editCompanyValidation = data => {
    const editCompany = {
        companyId: joi.number().required().error(() => {
            return { message: 'CompanyId is required' };
        }),
        companyName: joi.string().trim().required().error(() => {
            return { message: 'Company name is not allowed to be empty' };
        }),
        domainExt: joi.string().trim().required().error(() => {
            return { message: 'Company domain extention is not allowed to be empty' };
        }),
        webUrl: joi.string().trim().required().error(() => {
            return { message: 'Company web url is not allowed to be empty' };
        }),
        address: joi.string().trim().required().error(() => {
            return { message: 'Company address is not allowed to be empty' };
        }),
        emailId: joi.string().trim().required().error(() => {
            return { message: 'Company email address is not allowed to be empty' };
        }),
        alternateEmailId: joi.optional().allow('').error(() => {
            return { message: 'Company alternate email address is not allowed to be empty' };
        }),
        phoneNumber: joi.string().trim().required().error(() => {
            return { message: 'Company phone number is not allowed to be empty' };
        }),
        alternatePhoneNumber: joi.optional().allow('').error(() => {
            return { message: 'Company alternate phone numnber is not allowed to be empty' };
        }),
        companyLogo: joi.optional().allow('').error(() => {
            return { message: 'Please upload company logo' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editCompany);
}

const addCountryValidation = data => {
    const addCountry = {
        countryName: joi.string().trim().required().error(() => {
            return { message: 'Country name is not allowed to be empty' };
        }),
        alpha2: joi.string().trim().required().min(2).max(2).error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Alpha2 is not allowed to be empty' };
                    case 'string.min': return { message: 'Alpha2 must be not less than 2 characters' };
                    case 'string.max': return { message: 'Alpha2 must be not more than 2 characters' };
                }
            });
        }),
        alpha3: joi.string().trim().required().min(3).max(3).error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Alpha3 is not allowed to be empty' };
                    case 'string.min': return { message: 'Alpha3 must be not less than 3 characters' };
                    case 'string.max': return { message: 'Alpha3 must be not more than 3 characters' };
                }
            });
        }),
        uncode: joi.number().required().error(() => {
            return { message: 'Country code is not allowed to be empty' };
        }),
        countryFlag: joi.optional().allow('').error(() => {
            return { message: 'Please upload country flag' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addCountry);
}

const editCountryValidation = data => {
    const editCountry = {
        countryId: joi.number().required().error(() => {
            return { message: 'CountryId is required' };
        }),
        countryName: joi.string().trim().required().error(() => {
            return { message: 'Country name is not allowed to be empty' };
        }),
        alpha2: joi.string().trim().required().min(2).max(2).error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Alpha2 is not allowed to be empty' };
                    case 'string.min': return { message: 'Alpha2 must be not less than 2 characters' };
                    case 'string.max': return { message: 'Alpha2 must be not more than 2 characters' };
                }
            });
        }),
        alpha3: joi.string().trim().required().min(3).max(3).error((errors) => {
            return errors.map(error => {
                switch (error.type) {
                    case 'any.empty': return { message: 'Alpha3 is not allowed to be empty' };
                    case 'string.min': return { message: 'Alpha3 must be not less than 3 characters' };
                    case 'string.max': return { message: 'Alpha3 must be not more than 3 characters' };
                }
            });
        }),
        uncode: joi.number().required().error(() => {
            return { message: 'Country code is not allowed to be empty' };
        }),
        countryFlag: joi.optional().allow('').error(() => {
            return { message: 'Please upload country flag' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editCountry);
}

const addModeValidation = data => {
    const addMode = {
        modeName: joi.string().trim().required().error(() => {
            return { message: 'Mode name is not allowed to be empty' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addMode);
}

const editModeValidation = data => {
    const editMode = {
        modeId: joi.number().required().error(() => {
            return { message: 'ModeId is required' };
        }),
        modeName: joi.string().trim().required().error(() => {
            return { message: 'Mode name is not allowed to be empty' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editMode);
}

const addMainNavigationValidation = data => {
    const addMainNav = {
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        displayOrder: joi.optional().allow('').error(() => {
            return { message: 'Please select display order' };
        }),
        label: joi.string().trim().required().error(() => {
            return { message: 'Menu name is not allowed to be empty' };
        }),
        mainRoute: joi.string().trim().required().error(() => {
            return { message: 'Route url is not allowed to be empty' };
        }),
        icon: joi.optional().allow('').error(() => {
            return { message: 'Icon name is not allowed to be empty' };
        }),
        routeArray: joi.number().required().error(() => {
            return { message: 'Please select child route' };
        }),
        roleTypeId: joi.number().required().error(() => {
            return { message: 'Please select role type' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addMainNav);
}

const editMainNavigationValidation = data => {
    const editMainNav = {
        mainMenuId: joi.number().required().error(() => {
            return { message: 'MainMenuId is required' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        displayOrder: joi.number().required().error(() => {
            return { message: 'Please select display order' };
        }),
        label: joi.string().trim().required().error(() => {
            return { message: 'Menu name is not allowed to be empty' };
        }),
        mainRoute: joi.string().trim().required().error(() => {
            return { message: 'Route url is not allowed to be empty' };
        }),
        icon: joi.optional().allow('').error(() => {
            return { message: 'Icon name is not allowed to be empty' };
        }),
        routeArray: joi.number().required().error(() => {
            return { message: 'Please select child route' };
        }),
        roleTypeId: joi.number().required().error(() => {
            return { message: 'Please select role type' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editMainNav);
}

const addSubNavigationValidation = data => {
    const addSubNav = {
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        mainMenuId: joi.number().required().error(() => {
            return { message: 'Please select main menu' };
        }),
        displayOrder: joi.optional().allow('').error(() => {
            return { message: 'Please select display order' };
        }),
        label: joi.string().trim().required().error(() => {
            return { message: 'Child route label is not allowed to be empty' };
        }),
        subRoute: joi.string().trim().required().error(() => {
            return { message: 'Child route url is not allowed to be empty' };
        }),
        roleTypeId: joi.number().required().error(() => {
            return { message: 'Please select user type' };
        }),
        linkAction: joi.number().required().error(() => {
            return { message: 'Please select user action' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addSubNav);
}

const editSubNavigationValidation = data => {
    const editSubNav = {
        subMenuId: joi.number().required().error(() => {
            return { message: 'SubMenuId is required' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        mainMenuId: joi.number().required().error(() => {
            return { message: 'Please select main menu' };
        }),
        displayOrder: joi.optional().allow('').error(() => {
            return { message: 'Please select display order' };
        }),
        label: joi.string().trim().required().error(() => {
            return { message: 'Child route label is not allowed to be empty' };
        }),
        subRoute: joi.string().trim().required().error(() => {
            return { message: 'Child route url is not allowed to be empty' };
        }),
        roleTypeId: joi.number().required().error(() => {
            return { message: 'Please select user type' };
        }),
        linkAction: joi.number().required().error(() => {
            return { message: 'Please select user action' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editSubNav);
}

const addRoleValidation = data => {
    const addRole = {
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        roleName: joi.string().trim().required().error(() => {
            return { message: 'Role name is not allowed to be empty' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addRole);
}

const editRoleValidation = data => {
    const editRole = {
        roleId: joi.number().required().error(() => {
            return { message: 'RoleId is required' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        roleName: joi.string().trim().required().error(() => {
            return { message: 'Role name is not allowed to be empty' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editRole);
}

const addRoleTypeValidation = data => {
    const addRoleType = {
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        roleTypeName: joi.string().trim().required().error(() => {
            return { message: 'Role Type name is not allowed to be empty' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addRoleType);
}

const editRoleTypeValidation = data => {
    const editRoleType = {
        roleTypeId: joi.number().required().error(() => {
            return { message: 'RoleTypeId is required' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        roleTypeName: joi.string().trim().required().error(() => {
            return { message: 'Role Type name is not allowed to be empty' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editRoleType);
}

const addStatusValidation = data => {
    const addStatus = {
        statusName: joi.string().trim().required().error(() => {
            return { message: 'Status name is not allowed to be empty' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addStatus);
}

const editStatusValidation = data => {
    const editStatus = {
        statusId: joi.number().required().error(() => {
            return { message: 'StatusId is required' };
        }),
        statusName: joi.string().trim().required().error(() => {
            return { message: 'Status name is not allowed to be empty' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editStatus);
}

const addTeamValidation = data => {
    const addTeam = {
        teamName: joi.string().trim().required().error(() => {
            return { message: 'Team name is not allowed to be empty' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        channelId: joi.number().required().error(() => {
            return { message: 'Please select channel name' };
        }),
        addBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, addTeam);
}

const editTeamValidation = data => {
    const editTeam = {
        teamId: joi.number().required().error(() => {
            return { message: 'TeamId is required' };
        }),
        teamName: joi.string().trim().required().error(() => {
            return { message: 'Team name is not allowed to be empty' };
        }),
        companyId: joi.number().required().error(() => {
            return { message: 'Please select company name' };
        }),
        channelId: joi.number().required().error(() => {
            return { message: 'Please select channel name' };
        }),
        editBy: joi.optional().allow('').error(() => {
            return { message: 'UserId is not allowed to be empty' };
        }),
    }
    return joi.validate(data, editTeam);
}

const changePasswordValidation = data => {
    const changePassword = {
        password: joi.string().trim().required().label('password'),
        confirmPassword: joi.any().valid(joi.ref('password')).required().label('confirm password does not matched it'),
    }
    // const changePassword = {
    //     password: joi.string().trim().regex(new RegExp('/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/')).min(8).required().error((errors) => {
    //         return errors.map(error => {
    //             console.log(error);
    //             switch (error.type) {
    //                 case 'any.empty': return { message: 'Password is not allowed to be empty' };
    //                 case 'string.min': return { message: 'Password must be minimum 8 characters' };
    //                 case 'string.regex.base': return { message: 'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length' };
    //             }
    //         });
    //     }),
    //     confirmPassword: joi.any().valid(joi.ref('password')).required().label('confirm password does not matched it'),
    // }
    return joi.validate(data, changePassword);
}

module.exports = {
    registerValidation,
    addUserValidation,
    editUserValidation,
    loginValidation,
    addChannelValidation,
    editChannelValidation,
    addCompanyValidation,
    editCompanyValidation,
    addCountryValidation,
    editCountryValidation,
    addModeValidation,
    addMainNavigationValidation,
    editMainNavigationValidation,
    addSubNavigationValidation,
    editSubNavigationValidation,
    editModeValidation,
    addRoleValidation,
    editRoleValidation,
    addRoleTypeValidation,
    editRoleTypeValidation,
    addStatusValidation,
    editStatusValidation,
    addTeamValidation,
    editTeamValidation,
    changePasswordValidation,
}