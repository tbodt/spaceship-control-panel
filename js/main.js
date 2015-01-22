var $buttons = $(".control-panel");

var extraButtons = [
    "Self-Destruct",
    "Self-Destruct and Regret It",
    "Activate AI",
    "Deactivate AI",
    ""
];
var extraButtonsIndex = 0;

$("#add").click(function() {
    if (extraButtonsIndex < extraButtons.length) {
        $buttons.append($("<button type=\"button\">" + extraButtons[extraButtonsIndex] + "</button>"));
        extraButtonsIndex++;
    }
});