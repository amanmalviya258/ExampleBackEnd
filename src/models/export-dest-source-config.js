const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
let idValidator = require('mongoose-id-validator');
const uniqueValidator = require('mongoose-unique-validator');
const myCustomLabels = {
    totalDocs: 'itemCount',
    docs: 'data',
    limit: 'perPage',
    page: 'currentPage',
    nextPage: 'next',
    prevPage: 'prev',
    totalPages: 'pageCount',
    pagingCounter: 'slNo',
    meta: 'paginator',
};

mongoosePaginate.paginate.options = { customLabels: myCustomLabels };

const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        threadId: {
            type: Number,
            required: true,
            unique: false
        },
        refreshDuration: {
            type: Number,
            required: true,
            unique: false
        },
        dataSendCount: {
            type: Number,
            required: true,
            unique: false
        },
        dataSendHourlyCount: {
            type: Number,
            required: true,
            unique: false
        },
        dataDelay: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        dataKey: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        recordImportDate: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        exportType: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        exportMinDay: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        exportMaxDay: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        dataSourceId: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        conditionA: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        conditionB: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        isDupe: {
            type: Boolean
        },
        dupeChannelId: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        dupeDur: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        dataSendWeeklyCount: {
            type: Number,
            required: true,
            unique: false
        },
        dataPacketLimit: {
            type: Number,
            required: true,
            unique: false
        },
        dataSendPeriod: {
            type: Number,
            required: true,
            unique: false
        },
        monday: {
            type: Boolean
        },
        tuesday: {
            type: Boolean
        },
        wednesday: {
            type: Boolean
        },
        thursday: {
            type: Boolean
        },
        friday: {
            type: Boolean
        },
        saturday: {
            type: Boolean
        },
        sunday: {
            type: Boolean
        },
        scriptRunningStatus: {
            type: Boolean
        },
        runningStatusUpdatedOn: {
            type: Date
        },
        remark: {
            type: String,
            required: true,
            trim: true,
            unique: false,
            lowercase: true,
            uniqueCaseInsensitive: true
        },
        createdAt: {
            type: Date
        },
        createdBy: {
            type: String
        },
        updatedAt: {
            type: Date
        },
        updatedBy: {
            type: String
        },
        isDeleted: {
            type: Boolean
        },
        isActive: {
            type: Boolean,
            required: false
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    }
);

schema.pre('save', async function (next) {
    this.isDeleted = false;
    next();
});

schema.pre('insertMany', async function (next, docs) {
    if (docs && docs.length) {
        for (let index = 0; index < docs.length; index++) {
            const element = docs[index];
            element.isDeleted = false;
        }
    }
    next();
});

schema.method('toJSON', function () {
    const {
        _id, __v, ...object
    } = this.toObject({ virtuals: true });
    object.id = _id;

    return object;
});

schema.plugin(mongoosePaginate);
schema.plugin(idValidator);
schema.plugin(uniqueValidator, { message: 'Error, expected {VALUE} to be unique.' });

module.exports = mongoose.model('exportDestSourceConfig', schema);