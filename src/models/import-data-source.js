const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);
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
        sourceId: {
            type: Number,
            required: false,
            trim: false,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: false
        },
        ownerId: {
            type: String
        },
        location: {
            type: String
        },
        dbName: {
            type: String
        },
        connectToLakehouse: {
            type: Boolean,
            required: true
        },
        category: {
            type: String,
            required: true,
            trim: true,
            unique: false,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        trustFactor: {
            type: Number,
            required: true
        },
        dupeReject: {
            type: Boolean,
            required: false,
            unique: false
        },
        dupeCheck: {
            type: Boolean,
            required: true
        },
        badCheck: {
            type: Boolean,
            required: true
        },
        emailVerification: {
            type: Boolean,
            required: true
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
    this.isActive = true;
    next();
});

schema.pre('insertMany', async function (next, docs) {
    if (docs && docs.length) {
        for (let index = 0; index < docs.length; index++) {
            const element = docs[index];
            element.isDeleted = false;
            element.isActive = true;
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

module.exports = mongoose.model('importDataSource', schema);