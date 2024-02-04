var noButtonTexts = [
    "are you sure?",
    "really sure?",
    "think again!",
    "last chance!",
    "surely not?",
    "you might regret this!",
    "are you absolutely certain?",
    "u good??",
    "pookie pleaseeee",
    "if you say no, i'll be very sad",
    "very very sad",
    "very very very sad ",
    "ok fine, i'll stop asking..",
    "just kidding, PLEASE SAY YES!!",
    "is that your final answer?",
    "you're breaking my heart ;(",
    "ALLLERRRRRRRRRRRRRRRRRRR",
    "jte parle plus",
    "No",
  ];
  
  var noButtonIndex = 0;
  
  function resizeButton(buttonId) {
    var button = document.getElementById(buttonId);
    
    // Check if the button is 'No'
    if (buttonId === 'noButton') {
      // Change the text
      button.textContent = noButtonTexts[noButtonIndex];
      noButtonIndex = (noButtonIndex + 1) % noButtonTexts.length;
  
      // Get the 'Yes' button and resize it
      var yesButton = document.getElementById('yesButton');
      var currentSize = window.getComputedStyle(yesButton, null).getPropertyValue('font-size');
      var newSize = parseFloat(currentSize) + 8;
      yesButton.style.fontSize = newSize + 'px';
    } else if (buttonId === 'yesButton') {
    // Your additional script when 'Yes' is clicked
    var response = button.textContent;
    
    if (response === "Yes") {
      // Remove name message, no button and yes button
      document.getElementById("noButton").remove();
      document.getElementById("yesButton").remove();

      // Update text content, show message, and change image source to "dance.gif"
      const yesMessage = document.getElementById("name");
      yesMessage.textContent = "JAEKAZJEKS YIPEEE";
      yesMessage.style.display = "block";
      yesMessage.style.fontStyle = "normal";
      document.getElementsByClassName("image")[0].src = "images/mochi-peach.gif";
    }
  }
}
  