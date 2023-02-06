
const getData = async function() {
    try{
    
        const {data} = await axios.get("https://reqres.in/api/users?page=1")
        ar = data.data
        getUser(ar);
    }
    catch(error){
        console.log(error);
    }
}
getData();
const Delete1 = async function(id) {
    try{
        const {data} = await axios.delete(`https://reqres.in/api/users?page=1/${id}`)
        ar = data.data
        getUser(ar);
    }
    catch(error){
        console.log(error);
    }
}
function getUser(ar){
    ar.forEach(element => {
        let box = document.querySelector(".box")
        
        let card = document.createElement("div")
        card.setAttribute("class", "card")
        
        // // Delete
        let Delete = document.createElement("button")
        Delete.setAttribute("class", "Delete")
        Delete.innerHTML = 'Delete'
        Delete.onclick = Delete1(element.id)
        card.appendChild(Delete)
        ///////////////////////////////////////////////
        let id1 = document.createElement("p")  
        let email1 = document.createElement("p") 
        let firstname1 = document.createElement("p")
        let lastname1 = document.createElement("p")
        let avatar1 = document.createElement("img")
        id1.innerHTML = element.id
        email1.innerHTML = element.email
        firstname1.innerHTML = element["first_name"]
        lastname1.innerHTML = element["last_name"]
        avatar1.src = element.avatar
        card.appendChild(id1)
        card.appendChild(email1)
        card.appendChild(firstname1)
        card.appendChild(lastname1)
        card.appendChild(avatar1)
        box.appendChild(card)
    });
}


