// for create one as well as create many
exports.create = (model, data) => new Promise((resolve, reject) => {
    model.create(data, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// count documents
exports.count = (model, filter) => new Promise((resolve, reject) => {
    model.countDocuments(filter, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// find single document by query
exports.findOne = (model, filter, options = {}) => new Promise((resolve, reject) => {
    model.findOne(filter, options, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// find multiple documents
exports.findMany = (model, filter, options = {}) => new Promise((resolve, reject) => {
    model.find(filter, options, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// find multiple documents
exports.findMaxValue = (model, filter, options, sortValue) => new Promise((resolve, reject) => {
    model.find(filter, options, sortValue, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    }).limit(1);
});

// update single document that will return updated document
exports.updateOne = (model, filter, data, options = { new: true }) => new Promise((resolve, reject) => {
    model.findOneAndUpdate(filter, data, options, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// update multiple documents and returns count
exports.updateMany = (model, filter, data) => new Promise((resolve, reject) => {
    model.updateMany(filter, data, (error, result) => {
        if (error) reject(error);
        else resolve(result.modifiedCount);
    });
});

// delete single document that will return updated document
exports.deleteOne = (model, filter, options = { new: true }) => new Promise((resolve, reject) => {
    model.findOneAndDelete(filter, options, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});

// delete multiple documents and returns count
exports.deleteMany = (model, filter) => new Promise((resolve, reject) => {
    model.deleteMany(filter, (error, result) => {
        if (error) reject(error);
        else resolve(result.deletedCount);
    });
});

// find documents with pagination
exports.paginate = (model, filter, options) => new Promise((resolve, reject) => {
    model.paginate(filter, options, (error, result) => {
        if (error) reject(error);
        else resolve(result);
    });
});