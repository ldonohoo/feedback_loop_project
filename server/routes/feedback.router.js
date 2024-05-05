const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body))
    let newFeeling = req.body.feeling;
    let newUnderstanding = req.body.understanding;
    let newSupport = req.body.support;
    let newComments = req.body.comments;
    const sqlText = `
        INSERT INTO feedback
            (feeling, understanding, support, comments)
            VALUES ($1, $2, $3, $4);
    `;
    pool.query(sqlText, [newFeeling, 
                         newUnderstanding,
                         newSupport, 
                         newComments])
    .then(dbRes => {
        console.log('Insert of feedback in /api/feedback successful!');
        res.sendStatus(201);
    })
    .catch(dbErr => {
        console.log('Insert of new feedback had errors in /api/feedback:', dbErr);
        res.sendStatus(500);
    })
});


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

// This route deletes one feedback item
router.delete('/:id', (req,res) => {
    const feedbackId = req.params.id;
    sqlText = `
        DELETE FROM feedback
            WHERE id = $1;
    `;
    pool.query(sqlText, [feedbackId])
    .then(dbResponse => {
        console.log('DELETE route successful in /api/feedback/:id');
        res.sendStatus(200);
    })
    .catch(dbError => {
        console.log('Error in DELETE route for /api/feedback', dbError);
        res.sendStatus(500);
    })
});


module.exports = router;
