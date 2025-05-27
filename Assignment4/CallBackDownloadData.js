function downloadData(url){
    // console.log(`starting data downloading from this Url ${url}`);

    setTimeout(()=>{
        const fakeData = `Data from ${url}`;
        // console.log(`Download Data is Completed from ${url}`);
        checkError(null,fakeData);
    },2000);
}

downloadData("https://example.com");

const isError = checkError(error,data);

if(isError){
    console.log("Data is Completed SuccessFully");
}
else{
    console.log("Data is Not Completed and getting the error");
}
