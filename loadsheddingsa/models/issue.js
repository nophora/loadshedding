const mongoose = require('mongoose');



const Issue = mongoose.Schema;

const issueSchema = new Issue({
    image: String,
    location: String,
    issue: String,
    date: String,
    solution: String,
    resolve:[Object],
});


const issue = mongoose.model('issue', issueSchema);



module.exports = issue;
