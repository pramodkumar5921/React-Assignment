function downloadData(url){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(fakeData);
        },2000);
    });
    return promise;
}

downloadData("https://example.com")
    .then((data)=>{
        console.log("Received Data",data);
    }).catch((error)=>{
        console.log("Error is happening" ,error);
    })