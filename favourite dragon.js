document.getElementById("submitBtn").addEventListener("click", logForm);
    function logForm(){            
        
        //name part
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        
        let fName = firstName.charAt(0).toUpperCase() + firstName.substr(1);
        let lName = lastName.charAt(0).toUpperCase() + lastName.substr(1);
        
        //option part
        let dragons = document.getElementById("dragonSelector");
        let selectedDragon = dragons.options[dragons.selectedIndex].text;

        //comment part
        let customComment = document.getElementById("comments").value;
        alert("First Name: " + fName + "\n" + 
        "Last Name: " + lName + "\n" + 
        "Fabourite Dragon: " + selectedDragon + "\n" + 
        "Your Comments: " + customComment);
    }