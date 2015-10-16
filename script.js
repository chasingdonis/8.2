var newPara = document.getElementById('wrapper');

function textChange(){ 
document.getElementById("wrapper").addEventListener('click', function(){
        if (document.getElementById("wrapper")) {
            newPara.innerHTML = "<h3>This is alternatvie text, say goodbye to Exercise 8.2</h3>";
        }
    });
};
textChange();
