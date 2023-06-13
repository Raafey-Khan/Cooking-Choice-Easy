const foodSuggestions = {
	1: ['add here'],
	2: ['add here'],
	3: ['add here'],
	4: ['add here'],
	5: ['add here'],
	6: ['add here'],
	0: ['add here']
  };
  
  const sweetSuggestions = {
	1: ['here'],
	2: ['here'],
	3: ['here'],
	4: ['here'],
	5: ['here'],
	6:['here'],
	0:['here']
  };
  
  function getRandomFood() {
	const date = new Date();
	const dayOfWeek = date.getDay();
	const day = getDayName(dayOfWeek);
	const foodList = foodSuggestions[dayOfWeek];
  
	if (foodList && foodList.length > 0) {
	  const randomIndex = Math.floor(Math.random() * foodList.length);
	  const suggestion = foodList[randomIndex];
	  document.getElementById('food-suggestion').textContent = `${day}: ${suggestion}`;
	} else {
	  document.getElementById('food-suggestion').textContent = 'No suggestion for today';
	}
  }
  
  function getRandomSweet() {
	const date = new Date();
	const dayOfWeek = date.getDay();
	const day = getDayName(dayOfWeek);
	const sweetList = sweetSuggestions[dayOfWeek];
  
	if (sweetList && sweetList.length > 0) {
	  const randomIndex = Math.floor(Math.random() * sweetList.length);
	  const suggestion = sweetList[randomIndex];
	  document.getElementById('sweet-suggestion').textContent = `${day}: ${suggestion}`;
	} else {
	  document.getElementById('sweet-suggestion').textContent = 'No sweet suggestion for today';
	}
  }
  
  function getDayName(dayOfWeek) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[dayOfWeek];
  }
  
  // Displaying the entire week's suggestions
  function displayWeekSuggestions() {
	const weekContainer = document.getElementById('week-suggestions');
	
	for (let i = 0; i < 7; i++) {
	  const day = getDayName(i);
	  const foodList = foodSuggestions[i];
	  const sweetList = sweetSuggestions[i];
	  
	  const dayContainer = document.createElement('div');
	  dayContainer.classList.add('day-container', 'box');
	  
	  const dayHeading = document.createElement('h2');
	  dayHeading.classList.add('day-heading');
	  dayHeading.textContent = day;
	  
	  const foodHeading = document.createElement('h3');
	  foodHeading.classList.add('food-heading');
	  foodHeading.textContent = 'Food:';
	  
	  const foodListElement = document.createElement('ul');
	  if (foodList && foodList.length > 0) {
		foodList.forEach((food) => {
		  const foodItem = document.createElement('li');
		  foodItem.textContent = food;
		  foodListElement.appendChild(foodItem);
		});
	  } else {
		const noFoodItem = document.createElement('li');
		noFoodItem.textContent = 'No suggestion for today';
		foodListElement.appendChild(noFoodItem);
	  }
	  
	  dayContainer.appendChild(dayHeading);
	  dayContainer.appendChild(foodHeading);
	  dayContainer.appendChild(foodListElement);
	  
	  weekContainer.appendChild(dayContainer);
	}
  }
  
  // Call the function to display the week's suggestions when the page loads
  window.addEventListener('load', displayWeekSuggestions);
  