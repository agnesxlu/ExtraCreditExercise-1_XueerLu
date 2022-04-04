document.getElementById('backgroundColor').addEventListener('click', function onClick(event) {document.body.style.backgroundColor = '#FFC0CB';
});

document.getElementById('fontcolor').addEventListener('click', function onClick(event) {document.body.style.color = '#0000FF';
});

document.getElementById('fontFamily').addEventListener('click', function onClick(event) {document.body.style.fontFamily = 'Times New Roman';
});

document.getElementById('replacement').addEventListener('click', function onClick(event) {document.body.style.textContent.replace = 'Hello World!';
});

document.getElementById('alert').addEventListener('click',function(event){
    alert('Good Luck!');
});