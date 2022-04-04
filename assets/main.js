document.getElementById('backgroundColor').addEventListener('click', function onClick(event) {document.body.style.backgroundColor = '#FFC0CB';
});

document.getElementById('fontcolor').addEventListener('click', function onClick(event) {document.body.style.color = '#0000FF';
});

document.getElementById('fontFamily').addEventListener('click', function onClick(event) {document.body.style.fontFamily = 'Times New Roman';
});

function change_text(){document.getElementById("replacement").innerHTML = "Hi, I'm the new paragraph!";};

document.getElementById('alert').addEventListener('click',function(event){
    alert('Good Luck!');
});