function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
  
      // Create a new 'recommendation' element and set its value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
  
      // Get the container for recommendations
      var recommendationsContainer = document.getElementById("all_recommendations");
  
      // Insert this element at the beginning of the list of recommendations
      recommendationsContainer.insertBefore(element, recommendationsContainer.firstChild);
  
      // Reset the value of the textarea
      recommendation.value = "";
  
      // Show the popup
      showPopup(true);
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
  
  
  
  
  function showPopup(bool) {
    console.log("showPopup function called"); // Check if the function is called
  
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible';
    } else {
      document.getElementById('popup').style.visibility = 'hidden';
    }
  }
  