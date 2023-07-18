const joi = require('@hapi/joi');

const addExportDestSourceConfigManagementValidator = data => {
    const addExportDestSourceConfigManagement = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        threadId: joi.string().trim().required().error(() => {
            return { message: 'threadId is not allowed to be empty' }
        }),
        refreshDuration: joi.string().trim().required().error(() => {
            return { message: 'refreshDuration is not allowed to be empty' }
        }),
        dataSendCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendCount is not allowed to be empty' }
        }),
        dataSendHourlyCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendHourlyCount is not allowed to be empty' }
        }),
        dataDelay: joi.string().trim().required().error(() => {
            return { message: 'dataDelay is not allowed to be empty' }
        }),
        dataKey: joi.string().trim().required().error(() => {
            return { message: 'dataKey is not allowed to be empty' }
        }),
        recordImportDate: joi.string().trim().required().error(() => {
            return { message: 'recordImportDate is not allowed to be empty' }
        }),
        exportType: joi.string().trim().required().error(() => {
            return { message: 'exportType is not allowed to be empty' }
        }),
        exportMinDay: joi.string().trim().required().error(() => {
            return { message: 'exportMinDay is not allowed to be empty' }
        }),
        exportMaxDay: joi.string().trim().required().error(() => {
            return { message: 'exportMaxDay is not allowed to be empty' }
        }),
        dataSourceId: joi.string().trim().required().error(() => {
            return { message: 'dataSourceId is not allowed to be empty' }
        }),
        conditionA: joi.string().trim().required().error(() => {
            return { message: 'conditionA is not allowed to be empty' }
        }),
        conditionB: joi.string().trim().required().error(() => {
            return { message: 'conditionB is not allowed to be empty' }
        }),
        isDupe: joi.string().trim().required().error(() => {
            return { message: 'isDupe is not allowed to be empty' }
        }),
        dupeChannelId: joi.string().trim().required().error(() => {
            return { message: 'dupeChannelId is not allowed to be empty' }
        }),
        dupeDur: joi.string().trim().required().error(() => {
            return { message: 'dupeDur is not allowed to be empty' }
        }),
        dataSendWeeklyCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendWeeklyCount is not allowed to be empty' }
        }),
        dataPacketLimit: joi.string().trim().required().error(() => {
            return { message: 'dataPacketLimit is not allowed to be empty' }
        }),
        dataSendPeriod: joi.string().trim().required().error(() => {
            return { message: 'dataSendPeriod is not allowed to be empty' }
        }),
        monday: joi.string().trim().required().error(() => {
            return { message: 'monday is not allowed to be empty' }
        }),
        tuesday: joi.string().trim().required().error(() => {
            return { message: 'tuesday is not allowed to be empty' }
        }),
        wednesday: joi.string().trim().required().error(() => {
            return { message: 'wednesday is not allowed to be empty' }
        }),
        thursday: joi.string().trim().required().error(() => {
            return { message: 'thursday is not allowed to be empty' }
        }),
        friday: joi.string().trim().required().error(() => {
            return { message: 'friday is not allowed to be empty' }
        }),
        saturday: joi.string().trim().required().error(() => {
            return { message: 'saturday is not allowed to be empty' }
        }),
        sunday: joi.string().trim().required().error(() => {
            return { message: 'sunday is not allowed to be empty' }
        }),
        scriptRunningStatus: joi.string().trim().required().error(() => {
            return { message: 'scriptRunningStatus is not allowed to be empty' }
        }),
        runningStatusUpdatedOn: joi.string().trim().required().error(() => {
            return { message: 'runningStatusUpdatedOn is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, addExportDestSourceConfigManagement);
}

const editExportDestSourceConfigManagementValidator = data => {
    const editExportDestSourceConfigManagement = {
        name: joi.string().trim().required().error(() => {
            return { message: 'name is not allowed to be empty' }
        }),
        threadId: joi.string().trim().required().error(() => {
            return { message: 'threadId is not allowed to be empty' }
        }),
        refreshDuration: joi.string().trim().required().error(() => {
            return { message: 'refreshDuration is not allowed to be empty' }
        }),
        dataSendCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendCount is not allowed to be empty' }
        }),
        dataSendHourlyCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendHourlyCount is not allowed to be empty' }
        }),
        dataDelay: joi.string().trim().required().error(() => {
            return { message: 'dataDelay is not allowed to be empty' }
        }),
        dataKey: joi.string().trim().required().error(() => {
            return { message: 'dataKey is not allowed to be empty' }
        }),
        recordImportDate: joi.string().trim().required().error(() => {
            return { message: 'recordImportDate is not allowed to be empty' }
        }),
        exportType: joi.string().trim().required().error(() => {
            return { message: 'exportType is not allowed to be empty' }
        }),
        exportMinDay: joi.string().trim().required().error(() => {
            return { message: 'exportMinDay is not allowed to be empty' }
        }),
        exportMaxDay: joi.string().trim().required().error(() => {
            return { message: 'exportMaxDay is not allowed to be empty' }
        }),
        dataSourceId: joi.string().trim().required().error(() => {
            return { message: 'dataSourceId is not allowed to be empty' }
        }),
        conditionA: joi.string().trim().required().error(() => {
            return { message: 'conditionA is not allowed to be empty' }
        }),
        conditionB: joi.string().trim().required().error(() => {
            return { message: 'conditionB is not allowed to be empty' }
        }),
        isDupe: joi.string().trim().required().error(() => {
            return { message: 'isDupe is not allowed to be empty' }
        }),
        dupeChannelId: joi.string().trim().required().error(() => {
            return { message: 'dupeChannelId is not allowed to be empty' }
        }),
        dupeDur: joi.string().trim().required().error(() => {
            return { message: 'dupeDur is not allowed to be empty' }
        }),
        dataSendWeeklyCount: joi.string().trim().required().error(() => {
            return { message: 'dataSendWeeklyCount is not allowed to be empty' }
        }),
        dataPacketLimit: joi.string().trim().required().error(() => {
            return { message: 'dataPacketLimit is not allowed to be empty' }
        }),
        dataSendPeriod: joi.string().trim().required().error(() => {
            return { message: 'dataSendPeriod is not allowed to be empty' }
        }),
        monday: joi.string().trim().required().error(() => {
            return { message: 'monday is not allowed to be empty' }
        }),
        tuesday: joi.string().trim().required().error(() => {
            return { message: 'tuesday is not allowed to be empty' }
        }),
        wednesday: joi.string().trim().required().error(() => {
            return { message: 'wednesday is not allowed to be empty' }
        }),
        thursday: joi.string().trim().required().error(() => {
            return { message: 'thursday is not allowed to be empty' }
        }),
        friday: joi.string().trim().required().error(() => {
            return { message: 'friday is not allowed to be empty' }
        }),
        saturday: joi.string().trim().required().error(() => {
            return { message: 'saturday is not allowed to be empty' }
        }),
        sunday: joi.string().trim().required().error(() => {
            return { message: 'sunday is not allowed to be empty' }
        }),
        scriptRunningStatus: joi.string().trim().required().error(() => {
            return { message: 'scriptRunningStatus is not allowed to be empty' }
        }),
        runningStatusUpdatedOn: joi.string().trim().required().error(() => {
            return { message: 'runningStatusUpdatedOn is not allowed to be empty' }
        }),
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, editExportDestSourceConfigManagement);
}

const softDeleteExportDestSourceConfigManagementValidator = data => {
    const softDeleteExportDestSourceConfigManagement = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, softDeleteExportDestSourceConfigManagement);
}

const deleteExportDestSourceConfigManagementValidator = data => {
    const deleteExportDestSourceConfigManagement = {
        remark: joi.string().trim().required().error(() => {
            return { message: 'remark is not allowed to be empty' }
        }),
    }
    return joi.validate(data, deleteExportDestSourceConfigManagement);
}

module.exports = { addExportDestSourceConfigManagementValidator, editExportDestSourceConfigManagementValidator, softDeleteExportDestSourceConfigManagementValidator, deleteExportDestSourceConfigManagementValidator }