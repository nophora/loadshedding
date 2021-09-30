const express = require('express');
const issue = require('../models/issue');
const country = require('../models/country');
const router = express.Router();
require('dotenv').config()
require('./cloudinary')



//GET_ISSUE_ROUTER
router.get('/getissue', (req, res) => {
    issue.find({}).then(get_issue => {
        res.status(200).json(get_issue)
    }).catch(error => {
        if (error) {
            res.status(500).json({erros:'Oops something went wrong on get_issue'}) 
        }
    })
})

//POST_ISSUE_ROUTER
router.post('/issuespost', (req, res, next) => {
    const data = req.body;
    const newIssue = new issue(data);

    newIssue.save((error) => {
        if (error) {
            res.status(500).json({erros:'Oops something went wrong on post_movies'}) 
        }
        else {
            res.status(200).json('newIssue added')
        }
    });
})


//ISSUE_OPARATION
router.post('/resolve/:id', (req, res, next) => {
   
       
    issue.findOneAndUpdate({ _id: req.params.id }, { resolve: [req.body] }, { upsert: true }).then(() => {
            issue.findOne({ _id: req.params.id }).then(up_issue => {
                res.status(200).json(up_issue)
            }).catch(next, () => {
                res.status(500).json({ erros: 'Oops something went wrong on update_issue' })
         })
        }).catch(next, () => {
            res.status(500).json({ erros: 'Oops something went wrong on update_issue' })
   
        })

    
})

//FIND_IN_PROVINCE
router.post('/countrys/:id', (req, res, next) => {

    
    country.findOne({province: req.params.id }).then(province => {
        res.status(200).json(province)
    }).catch(next, () => {
        res.status(500).json('Oops something went wrong on get_province' )
 })

})


//PROVINCE POST
router.post('/country', (req, res, next) => {
    const data = req.body;
    const newCountry = new country(data);

    newCountry.save((error) => {
        if (error) {
            res.status(500).json('Oops something went wrong on post_province') 
        }
        else {
            res.status(200).json('newProvince added')
        }
    });
})


module.exports = router;

