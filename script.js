// script.js

document.getElementById('health-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const water = document.getElementById('water').value;
    const exercise = document.getElementById('exercise').value;
    const sleep = document.getElementById('sleep').value;
    const meals = document.getElementById('meals').value;

    document.getElementById('water-summary').innerText = water;
    document.getElementById('exercise-summary').innerText = exercise;
    document.getElementById('sleep-summary').innerText = sleep;
    document.getElementById('meals-summary').innerText = meals ? meals : 'None';
});
