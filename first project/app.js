// console.log("hello");
showNotes()



let addBtn = document.getElementById('addbtn')
addBtn.addEventListener('click',(e)=>{


let addTxt = document.getElementById('addtxt')
let notes = localStorage.getItem('notes')
if(notes== null){
    notesObj = [];

}
else{
    notesObj=JSON.parse(notes)
}
notesObj.push(addTxt.value)
localStorage.setItem('notes',JSON.stringify(notesObj))
addTxt.value="";
// console.log(notesObj)
showNotes()

})

//function to show our notes from local storage 



function showNotes(){
    let notes = localStorage.getItem('notes')
if(notes== null){
    notesObj = [];

}
else{
    notesObj=JSON.parse(notes)
}

let html="";

notesObj.forEach(function(element,index) {


    html +=`

      <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Notes ${index+1}</h5>
          <p class="card-text">${element}   </p>
          <button id=${index} onclick=" deleteNotes(this.id)" class="btn btn-primary">DELETE NOTE</button>
        </div>
      </div>
`    
});

let notesElm=document.getElementById('notes');
if(notesObj.length!=0){
    notesElm.innerHTML=html;

} 
else{
    notesElm.innerHTML=`nothing to show notes ADD NOTES above the add note section `
}


}





// function To Delete Notes


function deleteNotes(index){
    console.log("i am deleting")
    let notes = localStorage.getItem('notes')
    if(notes== null){
        notesObj = [];
    
    }
    else{
        notesObj=JSON.parse(notes)
    }
    notesObj.splice(index,1)
    localStorage.setItem('notes',JSON.stringify(notesObj))

    showNotes()
    

}

let search = document.getElementById('searchText')

search.addEventListener("input",function(){

    let inptval = search.value.toLowerCase();
    // console.log('hello',inptval)
let noteCard = document.getElementsByClassName('noteCard')
Array.from(noteCard).forEach(function(element){
    let cardTxt=element.getElementsByTagName('p')[0].innerText;
    if(cardTxt.includes(inptval)){
        element.style.display="block";
    } else{
        element.style.display="none";

    }

})
})