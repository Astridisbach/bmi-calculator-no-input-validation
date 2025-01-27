"use script";

// Step 1: Bed brugeren om deres højde
const heightInput = prompt("Enter your height in centimeters:");
const height = parseFloat(heightInput); // Konverter til flydende tal

// Step 2: Bed brugeren om deres vægt
const weightInput = prompt("Enter your weight in kilograms:");
const weight = parseFloat(weightInput); // Konverter til flydende tal

// Step 3: Valider input
if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
  alert("Invalid input! Please enter positive numbers for height and weight.");
} else {
  // Step 4: Beregn BMI
  const bmi = weight / (height / 100) ** 2;

  // Step 5: Bestem BMI-kategori
  let category;
  if (bmi < 16) {
    category = "Severely Underweight";
  } else if (bmi >= 16 && bmi <= 18.4) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    category = "Moderately Obese";
  } else if (bmi >= 35.0 && bmi <= 39.9) {
    category = "Severely Obese";
  } else {
    category = "Morbidly Obese";
  }

  // Step 6: Vis resultat
  alert(
    `Your BMI is ${bmi.toFixed(2)}.\nCategory: ${category}.`
  );
}