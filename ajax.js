promise = new Promise((resolve,reject)=>{

var request = new XHTMLRequest()
request.onload=()=>{

};
});

promise
.then(()=>{

  console.log("everything is fine");
}).then("so niw exit").catch("okay eroir");