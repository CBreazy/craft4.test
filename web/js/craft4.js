// craft4.js

import getForms from "./getForms.js";
import formIsValid from "./validateForm.js";
import acquisitionsChart from "./acquisitions.js";

// hip-hop anonymous
(function(){
    // show charts
    acquisitionsChart();
    // get forms
    let forms = getForms();

    // add event listener to forms
    forms.forEach(form => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // if the form is valid, submit it boi
        if (formIsValid(form)) {
            form.submit();
        }
        });
    });
})();