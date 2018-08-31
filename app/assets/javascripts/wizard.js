var wiz_currentTab = 0;

function wiz_progress() {
    var x = document.getElementsByClassName("wiz_tab");
    var count = x.length;
    var progress = parseFloat(wiz_currentTab + 1) * parseFloat(100) / parseFloat(count);
    return progress;
}

function wiz_showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("wiz_tab");
    x[n].style.display = "block";

    // ... and fix the Previous/Next/Submit buttons:
    if (n === 0) {
        document.getElementById("wiz_prevBtn").style.display = "none";
    } else {
        document.getElementById("wiz_prevBtn").style.display = "inline";
    }
    if (n >= (x.length - 1)) {
        document.getElementById("wiz_submitBtn").style.display = "inline";
        document.getElementById("wiz_nextBtn").style.display = "none";
    } else {
        document.getElementById("wiz_submitBtn").style.display = "none";
        document.getElementById("wiz_nextBtn").style.display = "inline";
    }

    // Update progress bar
    $('.wiz_progress').attr('aria-valuenow', wiz_progress() * 100).css('width', wiz_progress() + '%');
}

function wiz_next() {
    wiz_nextPrev(1);
}
function wiz_previous() {
    wiz_nextPrev(-1);
}

function wiz_nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("wiz_tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1 && !wiz_validateForm()) return false;
    // Hide the current tab:
    x[wiz_currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    wiz_currentTab = wiz_currentTab + n;

    // if you have reached the end of the form... :
    /*if (wiz_currentTab >= x.length) {
        //...the form gets submitted
        document.getElementById("wiz_form")[0].submit();
        return false;
    }*/
    // Otherwise, display the correct tab:
    wiz_showTab(wiz_currentTab);
}

function wiz_validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("wiz_tab");
    y = x[wiz_currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    return valid; // return the valid status
}

function wiz_fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("wiz_step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}
