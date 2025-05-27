function writeData(data){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isError = true;
            if(isError){
                reject("Failed to write the due to Server Error");
            }
            else{
                const fileData = `${data} ${Date.now()}.txt`;
                resolve(fileData);
            }
        },2000);
    });
    return promise;
}



const sampleData = "This is the Sample Data";
async function main(){
   try{
     const fileData =  await writeData(sampleData);
     console.log(fileData);
   }catch(error){
        console.log(error);
   }
}
main();