//If user adds a note, add it to a local storage


showNotes()
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
    //   console.log(notesObj);
    showNotes();
});


// function to show elements from localStorage


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class=" noteCard my-3 mx-3 card" style="width: 18rem;">
                    
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}</p>
                    <button id="${index}" onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add Note" section above to add notes`
    }

}

// function to delete Notes

function deleteNote(index) {
    // console.log("i'n deleting",index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes()

}

// fucntion for Search Filter

search = document.getElementById('searchtxt');
search.addEventListener("input", function () {

    // console.log('input event fire!')

    let inputVal = search.value.toLowerCase()
    console.log("input event fired", inputVal);

    let noteCards = document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }

    })
})