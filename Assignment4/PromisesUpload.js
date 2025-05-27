
function uploadFile(fileName , targetUrl){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isError = true;
            if(isError){
                reject(`${fileName} is not uploaded due to wrongurl`);
            }
            else{
                resolve(`${fileName} is Upload successfully`);
            }
        },2000);
    });

    return promise;
}

const fileName = "file1.txt";
const targetUrl = "htps://example2.com";

uploadFile(fileName,targetUrl)
.then((message)=>{
    console.log(`${message}`);
}).catch((error)=>{
    console.log(`${error}`);
})