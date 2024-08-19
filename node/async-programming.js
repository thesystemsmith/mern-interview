// control flow

// callbacks
function fetchdData(callback){
    setTimeout(() => {
        const data = 'something'
        callback(null, data)
    },2000)
}
function processData(err, data){
    if(err){
        console.error('error: ',  err)
        return
    }
    console.log('data: ', data)
}

fetchdData(processData)

//promises
function fetchdData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = 'something'
            resolve(data)
        }, 2000);
    })
}
fetchdData.then(data => {
    console.log(data)
}).catch(error => {
    console.log(error)
})


// async await
async function processData(){
    try{
        const data = await fetchdData()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

//Managing Control Flow in Node.js:
// 1. Understand the Asynchronous Nature of Node.js:
// 2. Choose the Right Control Flow Mechanism:
// 3. Modularize and Use Error Handling:
// 4. Leverage Control Flow Libraries:
