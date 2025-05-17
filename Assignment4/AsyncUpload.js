function uploadFile(file,targetUrl){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isError = true;
            if(isError){
                reject(`${file} is not uploaded due to the ${targetUrl} is not exist`);
            }
            else{
                resolve("file is uploaded successfully");
            }
        },2000);
    });
    return promise;
}

const targetUrl = "http://example2.com";
const file = "file1.txt";
async function main(){
     try{
        const message = await uploadFile(file,targetUrl);
        console.log(`${message}`);
     }
     catch(error){
        console.log(`${error}`);
     }
}

main();