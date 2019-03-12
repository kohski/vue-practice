const axios = require("axios")


// 成功パターンその１
async function get_info(){
  console.log(await axios.get("http://jsonplaceholder.typicode.com/posts"))
};
get_info()

// 成功パターンその2
async function get_info(){
  return await axios.get("http://jsonplaceholder.typicode.com/posts")
};
get_info().then(result => {
  console.log(result)
})
