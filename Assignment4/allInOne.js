function downloadData(url){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const fakeData = `This is random data from this url ${url}`;
            const isDownloadPossible = true;
            if(isDownloadPossible){
                resolve(fakeData);
            }
            else{
                reject("Download failed");
            }
        },2000);
    });
    return promise;
}

function fileToWrite(data){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const file1 = `Written file with content: "${data}" at ${Date.now()}`;
            const isWrittenFileDone = true;
            if(isWrittenFileDone){
                resolve(file1);
            }
            else{
                reject("Writing data to file failed");
            }
        },3000);
    });
    return promise;
};

function uploadToFile(file,targetUrl){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isUploaded = true;
            if(isUploaded){
                resolve(`Upload of "${file}" to "${targetUrl}" is done.`);
            }else{
                 reject(`Upload of file to "${targetUrl}" failed.`);
            }
        },4000);
    });
    return promise;
}

async function main(){
    const url = "https://example.com";
    const targetUrl = "https://example2.com";
    try{
        const data = await downloadData(url);
        const fileName = await fileToWrite(data);
        const uploadStatus = await uploadToFile(fileName,targetUrl);

        console.log("✅ File uploaded successfully!");
        console.log(uploadStatus);


    }catch(error){
        console.log(error);
    }
}
main();