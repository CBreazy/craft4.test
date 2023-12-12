// validateForm.js

// allAreTrue - evaluates a bool array
function allAreTrue(arr) {
    return arr.every(element => element === true);
}

// inputIsValid
function inputIsValid(input) {
    return input.checkValidity();
}

// formIsValid
export default function formIsValid(form) {
    // destructure elements into an array
    let formElementsArray = [...form.elements],
        boolArray = [];

    console.log(formElementsArray);

    // push the bool result of inputIsValid(node) into boolArray
    formElementsArray.forEach(node => {
        boolArray.push(inputIsValid(node));
    });

    console.log(boolArray);

    // evaluate boolArray
    if (allAreTrue(boolArray)) {
        return true;
    } else {
        return false;
    }
}