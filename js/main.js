var extraButtons = [
    "Self-Destruct",
    "Self-Destruct and Regret It",
    "Activate AI",
    "Deactivate AI",
    "Do Not Press This Button",
    "Make a Sandwich",
    "Roll Credits",
];
var extraButtonsIndex = 0;

$(document).ready(function () {
    var $buttons = $(".buttons");
    
    $("#add").click(function () {
        if (extraButtonsIndex < extraButtons.length) {
            $buttons.append($("<button type=\"button\">" + extraButtons[extraButtonsIndex] + "</button>"));
            extraButtonsIndex++;
        }
    });
    
    $('input[type="range"]').rangeslider({
        polyfill: false,
        
        rangeClass: "slider",
        fillClass: "slider-fill",
        handleClass: "slider-handle"
    });
});