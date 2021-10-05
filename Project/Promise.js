import axios from "axios";

//This code shows implementation of Promise
const getData = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      resolve(res.data);
      reject("Data Not Found");
    });
  });
};

//This code shows implementation of async-await
const asyncFunction = async () => {
  let apiData = await getData();
  console.log("data fetch successfully-->", apiData);
};

asyncFunction();
