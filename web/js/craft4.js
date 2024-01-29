// craft4.js
import { APP } from "./App.js"
import getForms from "./getForms.js";
import formIsValid from "./validateForm.js";
import weightChart from "./weightChart.js";
window.APP = APP;
window.APP.weightChart = weightChart;


// hip-hop anonymous
(function(){
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