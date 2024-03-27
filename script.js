class Smoothie {
  constructor(selectedMilk, selectedFruit, selectedSweetener, selectedPowders, includeIce) {
    this.selectedFruit = selectedFruit;
    this.selectedMilk = selectedMilk;
    this.selectedSweetener = selectedSweetener;
    this.selectedPowders = selectedPowders;
    this.includeIce = includeIce;
  }

  calculateSmoothieCost() {
    // Prices for each ingredient for the smoothie
    const ingredientPrices = {
      banana: 1,
      strawberry: 2,
      mango: 3,
      honey: 1,
      sugar: 2,
      stevia: 3,
      hemp: 1,
      spirulina: 2,
      Maca: 3,
      ice: 0.1
    };

    // Calculate the total cost of the smoothie
    let totalCost = 0;

    // Add prices of selected ingredients
    totalCost += ingredientPrices[this.selectedFruit] || 0;
    totalCost += ingredientPrices[this.selectedMilk] || 0;
    totalCost += ingredientPrices[this.selectedSweetener] || 0;

    // Add price for smoothie powders if selected
    if (this.selectedPowders) {
      totalCost += ingredientPrices[this.selectedPowders];
    }

    // Add price for per ice cubes, if it is included
    if (this.includeIce) {
      totalCost += (ingredientPrices.ice * 3);
    }

    return totalCost.toFixed(2);
  }

  // Function to get the description of the smoothie
  getSmoothieDescription() {
    let description = `Smoothie with: ${this.selectedFruit}, ${this.selectedMilk}, ${this.selectedSweetener}`;
    if (this.selectedPowders) {
      description += `, ${this.selectedPowders}`;
    }
    if (this.includeIce) {
      description += ', with ice';
    }
    return description;
  }
}

// Event listener function for smoothie form submission
document.getElementById('smoothie-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const selectedMilk = document.getElementById('milk').value;
  const selectedFruit = document.getElementById('fruit').value;
  const selectedSweetener = document.getElementById('sweetener').value;
  const selectedPowders = document.getElementById('powders').value;
  const includeIce = document.getElementById('ice').checked;

  const smoothie = new Smoothie(selectedMilk, selectedFruit, selectedSweetener, selectedPowders, includeIce);

  const smoothieOutput = document.getElementById('smoothie-output');

  // Calculate total cost of the smoothie
  const totalCost = smoothie.calculateSmoothieCost();

  // Display smoothie description and total cost
  smoothieOutput.innerHTML = `<p>${smoothie.getSmoothieDescription()}</p><p>Total Cost: $${totalCost}</p>`;
});
