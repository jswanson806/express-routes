

module.exports = {

    extractVals: 
    /** 
    * returns array of numbers split on the comma from the query string 
    */
    function extractVals(q){
         
        const numsList = Object.values(q);
        const nums = numsList[0].split(',');
        return nums;
    },

    median: 
    /**
     * calculates median value from array of numbers 
     */
    function median(nums){
        // sort the array of nums from smallest to largest
        const sortedArr = nums.sort((a,b) => a - b);

        // hold the middle index of the array
        const midIndex = Math.floor(sortedArr.length / 2);

        // variable to hold val
        let val = 0;
        
        // check if the sortedArr length is an even number
        if (sortedArr.length % 2 === 0) {
            // take two numbers at the middle of the sortedArr, add them together, divide by 2
            val = (Number(sortedArr[midIndex - 1]) + Number(sortedArr[midIndex])) / 2;
        // sortedArr length is odd
        } else {
            // get the value at the center of the sortedArr
            val = Number(sortedArr[midIndex]);
        }
        // return the median val
        return val;
    },

    mode: 
    /**
     * calculates mode value from array of numbers 
     */
    function mode(nums){
        const sortedArr = nums.sort((a,b) => a - b);

        // holds count of each element in sortedArr
        const count = {};

        //iterate over each element in sortedArr
        sortedArr.forEach(el => {
            //if the element is not in the object, add it as key and set value to 0
            if(!(el in count)) count[el] = 0;

            //if the element is in the object, increment value by 1
            count[el]++;
        })
        
        //initilize variable to hold most frequent num
        let mostFreq;
     
        //hold maxVal in variable initialized as 0
        let maxVal = 0;

        //iterate over the k,v in object entries
        Object.entries(count).forEach(([k,v]) => {

            //if v is > maxVal, mostFreq = k & maxVal = v
            if (v > maxVal) {
                mostFreq = k;
                maxVal = v;
            }
        })

        // return mode (mostFreq)
        return Number(mostFreq);
    }

}