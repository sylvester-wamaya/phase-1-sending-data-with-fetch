function submitData(name, email){
    const objectConfiguration = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name, email})
    };
return fetch("http://localhost:3000/users", objectConfiguration)
.then((response)=>{
    return response.json();
})
.then((object)=>{
    document.body.innerHTML = object["id"]
})
.catch((error)=>{
    document.body.innerHTML= error.message
})
};
submitData();

