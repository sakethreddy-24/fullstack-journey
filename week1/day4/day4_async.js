function doAfter2Seconds(callback){
    setTimeout(()=>{
        callback("done waiting");
    },2000);
}

doAfter2Seconds((result)=>{
    console.log(result);
});

console.log("this prints immediately");

const myPromise = new Promise((resolve, reject) =>{
    const success = true;

    if(success){
        resolve("it worked");
    }
    else{
        reject("someting failed");
    }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

  const wait = (ms) => new Promise((resolve) =>setTimeout(resolve, ms));

  const runAsync = async () => {
    console.log("start");
    await wait(1000);
    console.log("afte 1 sec");
    await wait(1000);
    console.log("after 2 sec");
  };

  runAsync();

  const mightFall = async() =>{
    try {
        const result = await new Promise((resolve,reject)=>{
            reject("something went wrong");
        });
        concole.log(result);
    }catch(error){
console.log("caught error: ",error);
    }
    };
 mightFall();
  