//Q1
document.getElementById("clickToReverse").addEventListener("click", reverseBtnEvent);
function reverseBtnEvent(){
    let arr = document.getElementById("arrayToReverse").innerHTML;
    let reArr = reverseArray(arr);
    if (reArr)
        document.getElementById("q1Answer").innerHTML = reArr.join(" ");
    else
    document.getElementById("q1Answer").innerHTML = "error";
}
function reverseArray(arrstr){
    if (arrstr == undefined || arrstr == null)
        return false;
    else{
        let arr = arrstr.split(" ");
        let reverArr = [];
        while(arr.length > 0){
            reverArr.push(arr.pop())
        }
        return  reverArr;
    }
}

//Q2
document.getElementById("lastNBtn").addEventListener("click", cleckToEliminateBtnEvent);

function cleckToEliminateBtnEvent(){
    let num = Number(document.getElementById("lastN").value);
    let arr = document.getElementById("arrayToReturnLastNNum").innerHTML;
    arr = arr.split(" ");
    let eliminatedArr = getLastNelement(arr, num);
    if(eliminatedArr)
        document.getElementById("q2Answer").innerHTML = eliminatedArr.join(" ");
    else
        document.getElementById("q2Answer").innerHTML = "error";      
}

function getLastNelement(array, n){

    let lastNElementArr = [];
    if(array == undefined || array == null || !Array.isArray(array) || 
        n < 0 || n > array.length)
        return false;

    else{
        let starIndex = array.length - n;
        for(starIndex; starIndex < array.length; starIndex++){
            lastNElementArr.push(array[starIndex]);
        }
        return lastNElementArr;
    }
}
document.getElementById("deleteDuplicateBtn").addEventListener("click", deleteDuplicatesBtnEvent);
function deleteDuplicatesBtnEvent(){
    let arr = document.getElementById("arrayToDeleteDulplicats").innerHTML.split(" ");
    let anArr = deleteDuplicates(arr);
    if(anArr)
        document.getElementById("q3Answer").innerHTML = anArr.join(" ");
    else
        document.getElementById("q3Answer").innerHTML = "error";
}
function deleteDuplicates(array){
    if(array == undefined || array == null || !Array.isArray(array)) 
        return false;
    else{
        let current = 0;
        for (current; current < array.length; current++){
            let lastIndex = array.lastIndexOf(array[current]);
            while(current != lastIndex){
                array.splice(lastIndex, 1);
                lastIndex = array.lastIndexOf(array[current]);
            }
        }
        return array;
    }
}
document.getElementById("getGreatestBtn").addEventListener("click", getGreatestBtnEvent);
function getGreatestBtnEvent(){
    let arr = document.getElementById("fiveNums").innerHTML.split(" ");
    let max = largestOfFive(arr);
    if (!isNaN(max)){
        document.getElementById("q4Answer").innerHTML = max;
        alert(`Greatest value: ${max}`);
    }
    else{
        document.getElementById("q4Answer").innerHTML = "error";
        alert("error");
    }
}

function largestOfFive(array){
    let current = 0;
    let max = Number.NEGATIVE_INFINITY;
    while (current < array.length){
        if (isNaN(Number(array[current])))
            continue;
        max = max > Number(array[current])? max : Number(array[current]);
        current++;
    }
    return max;
}


document.getElementById("getNumsOfPropertiesBtn").addEventListener("click", getNumsOfPropertiesBtnEvent)
function getNumsOfPropertiesBtnEvent(){
    document.getElementById("q5Answer").innerHTML = countStudentProperties();
}
function countStudentProperties(){
    let count = 0;
    for(var properti in studentObj){
        if(studentObj.hasOwnProperty(properti))
        count++;
    }
    return count++
}

var studentObj = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
  };