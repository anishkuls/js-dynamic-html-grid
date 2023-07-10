
function printHeading(id,category){
    const heading = document.getElementById(id);
    heading.textContent = `${category} For Men and Women`;
}

printHeading("cloths-heading","Clothes");
printHeading("asr-heading","Accessories");

