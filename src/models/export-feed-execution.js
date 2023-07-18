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
        description:{
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
        },
        feedType:{
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: false,
            uniqueCaseInsensitive: true
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
            type: Boolean
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

module.exports = mongoose.model('exportFeedExecution', schema);