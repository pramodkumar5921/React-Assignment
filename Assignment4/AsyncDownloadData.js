function downloadData(url){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const fakeData = `Data using this link ${url}`;
            reject(fakeData);
        },2000);
    });
    return promise;
}

async function main(){
    try{
        const data = await downloadData("https://exmaple.com");
        console.log("Received Data",data);
    }
    catch(error){
        console.log("Error is happened");
    }
}
main();