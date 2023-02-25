const express = require('express');
const helper = require('./helper');
const app = express();
app.use(express.json());


const resp = [
  
];


app.get("/mean", (req, res) => {
    // check for empty query string
    if(Object.keys(req.query).length === 0) return res.status(404).json({msg: 'nums are required'});

    const q = req.query;

    // return array of each element in query string and save to nums
    const nums = helper.extractVals(q);

    //holds total of numbers (nums) passed in query string (q)
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
        // convert string to number
        let num = Number(nums[i]);

        //check if num is not a number
        if(isNaN(num)) return res.status(404).json({msg: `${nums[i]} is not a number`});

        // add value to total
        total += Number(nums[i]);
    }

    // holds the calculated average of total
    let val = total / nums.length;

    resp.push({ response: { operation: "mean", value: `${val}` } })
    console.log(res.body);
    res.status(201).json(resp);
})


app.get("/median", (req, res) => {
    // check for empty query string
    if(Object.keys(req.query).length === 0) return res.status(404).json({msg: 'nums are required'});

    const q = req.query;

    // return array of each element in query string and save to nums
    const vals = helper.extractVals(q);
    const nums = [];

    for(let i = 0; i < vals.length; i++) {
        // convert string to number
        let num = Number(vals[i]);

        //check if num is not a number
        if(isNaN(num)) return res.status(404).json({msg: `${vals[i]} is not a number`});
        nums.push(num);
    }

    const val = helper.median(nums);
    
    resp.push({ response: { operation: "median", value: `${val}` } })
    
    res.status(201).json(resp);

})

app.get("/mode", (req, res) => {
    // check for empty query string
    if(Object.keys(req.query).length === 0) return res.status(404).json({msg: 'nums are required'});

    const q = req.query;

    // return array of each element in query string and save to nums
    const vals = helper.extractVals(q);
    const nums = [];

    for(let i = 0; i < vals.length; i++) {
        // convert string to number
        let num = Number(vals[i]);

        //check if num is not a number
        if(isNaN(num)) return res.status(404).json({msg: `${vals[i]} is not a number`});
        nums.push(num);
    }

    let val = helper.mode(nums);
    
    resp.push({ response: { operation: "mode", value: `${val}` } })
    
    res.status(201).json(resp);
})


const server = app.listen(3000, function () {
    console.log('App on port 3000');
})

module.exports = server;