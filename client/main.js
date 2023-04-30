


// grabbing elements from the dom
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const fortuneSection = document.querySelector('.fortuneSection')

// grabbing elements for magic 8 ball
const questionInput = document.querySelector('#magicBallQuestion')
const submitBtn = document.querySelector('.submit')
const questionsSection = document.querySelector('.magicBallSection')

//get elements for http routes
const getBtn = document.querySelector('.getBtn')
const postBtn = document.querySelector('.postBtn')
const putBtn = document.querySelector('.putBtn')
const deleteBtn = document.querySelector('.deleteBtn')
let buttonsArr = [getBtn, postBtn, putBtn, deleteBtn]
// call back function for compliments 
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
// callback function for fortunes 
const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune')
    .then(res => {
        let h3 = document.createElement('h3')
        h3.textContent = res.data
        fortuneSection.appendChild(h3)

    })
}
//callback function for magic 8ball
const askQuestion = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/question', {
        question: questionInput.value
    })
    .then(res => {
        console.log(res)
        let containerDiv = document.createElement('div')
        questionsSection.appendChild(containerDiv)
        let h3 = document.createElement('h3')
        h3.textContent = res.data
        containerDiv.appendChild(h3)
    })

}

const editP = (e) => {
    e.preventDefault()
    let httpRequestSection = document.querySelector('.httpRequestSection')
    // get all of the p tags 
    let httpGet = document.querySelector('.httpGet')
    let httpPost = document.querySelector('.httpPost')
    let httpPut = document.querySelector('.httpPut')
    let httpDelete = document.querySelector('.httpDelete')
    // get all of the input info 
    let getInput = document.querySelector('.getInput')
    let postInput = document.querySelector('.postInput')
    let putInput = document.querySelector('.putInput')
    let deleteInput = document.querySelector('.deleteInput')
    console.log(e.target.className)
    let className = e.target.className
    if(className === 'getBtn'){
        console.log('getbtn touched')
        let input = getInput.value
        axios.put(`http://localhost:4000/api/btn`,{
           ptag: httpGet.textContent = input
        })
        .then(res => {
            let pTag = document.createElement('p')
            ptag.textContent = res.ptag
            httpRequestSection.appendChild(pTag)
        })
        .catch(err => console.log(err)) 
    }
    else if(className === 'postBtn'){
        console.log('post btn hit')
        let input = postInput.value
        axios.put(`http://localhost:4000/api/btn`,{
           ptag: httpPost.textContent = input
        })
        .then(res => {
            let pTag = document.createElement('p')
            ptag.textContent = res.ptag
            httpRequestSection.appendChild(pTag)
        })
        .catch(err => console.log(err)) 
    }
    else if(className === 'putBtn'){
        console.log('put btn hit')
        let input = putInput.value
        axios.put(`http://localhost:4000/api/btn`,{
           ptag: httpPut.textContent = input
        })
        .then(res => {
            let pTag = document.createElement('p')
            ptag.textContent = res.ptag
            httpRequestSection.appendChild(pTag)
        })
        .catch(err => console.log(err)) 
    }
    else if(className === 'deleteBtn'){
        console.log('delete btn hit')
        let input = deleteInput.value
        axios.put(`http://localhost:4000/api/btn`,{
           ptag:httpDelete.textContent = input
        })
        .then(res => {
            let pTag = document.createElement('p')
            ptag.textContent = res.ptag
            httpRequestSection.appendChild(pTag)
        })
        .catch(err => console.log(err)) 
    }
    else{
        console.log('error')
    }
} 

// grab buttons for delete method
let delete1 = document.querySelector('#delete1')
let delete2 = document.querySelector('#delete2')
let delete3 = document.querySelector('#delete3')
let deleteArr = [delete1,delete2,delete3]

let deleteOne = (e) => {
  console.log(e.target.id) 
  if(e.target.id === 'delete1'){
    let p = document.querySelector('.p1')
    p.classList.add('hidden')
  }
  else if(e.target.id === 'delete2'){
    let p = document.querySelector('.p2')
    p.classList.add('hidden')
  }
  else if(e.target.id === 'delete3'){
    let p = document.querySelector('.p3')
    p.classList.add('hidden')
  }
  else{
    console.log('errrr')
  }
}

//event listener for the delete
deleteArr.forEach(btn => {
    btn.addEventListener('click', deleteOne)
})

// event listeners 
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click', askQuestion)

buttonsArr.forEach(btn => {
    btn.addEventListener('click', editP)
})