
function writeData(Data){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isError = true;
            if(isError){
                reject("Failed to write the data");
            }
            else{
                const fileName = `file${Date.now()}txt`;
                resolve(fileName);
            }
        },2000);
    });
    return promise;
}

const sampleData = "This is the sample Data";
writeData(sampleData)
 .then((file)=>{
    console.log(`${file}`);
    console.log("write file Successfully");
 }).catch((error)=>{
    console.log(error);
 })
 
