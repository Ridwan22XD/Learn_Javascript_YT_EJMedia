function Validation()
{
    // Declare variabel name
    // Filled variabel name according elemet with id = "name"
    var name = document.getElementById("name");
    
    // Declare variabel address
    // Filled variabel address according elemet with id = "name"
    var address = document.getElementById("address");
    
    // Check value name ("" = null)
    // if(name.value == "" || address.value == "")
    
    // Check length name and address less than 5 character
    if(name.value.length < 5 || address.value.length < 5)
    {
        // Check length name less than 5 character
        if(name.value.length < 5)
        {
            alert("Name must be filled more than 5 Character");
            name.focus();
            // set filled bold red 
            name.style.border = "solid 3px red";
        }
        // Check length address less than 5 character
        else if(address.value.length < 5)
        {
            alert("Email must be filled more than 5 Character");
            name.focus();
            // set filled bold red 
            name.style.border = "solid 3px red";
        }
        
        // Show warning pop
        
        // Cancel function submit from form
        return false;
    }    
}