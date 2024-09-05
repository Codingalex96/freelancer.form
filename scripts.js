// Initialize possible names and occupations
const names = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const occupations = ["gardener", "programmer", "teacher", "driver"];

// Initialize freelancers array with at least two objects
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" }
];

// Function to render freelancers to the DOM in a table format
function renderFreelancers() {
  const container = document.querySelector('#freelancers-container');
  container.innerHTML = ''; // Clear the existing content

  freelancers.forEach(function(freelancer) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = freelancer.name;
    row.appendChild(nameCell);

    const occupationCell = document.createElement('td');
    occupationCell.textContent = freelancer.occupation;
    row.appendChild(occupationCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${freelancer.price}`;
    row.appendChild(priceCell);

    container.appendChild(row);
  });

  updateAveragePrice();
}

// Function to update the average price in the DOM
function updateAveragePrice() {
  const average = calculateAveragePrice();
  document.querySelector('#average-price').textContent = average.toFixed(2);
}

// Function to calculate the average starting price of freelancers
function calculateAveragePrice() {
  const total = freelancers.reduce(function(acc, freelancer) {
    return acc + freelancer.price;
  }, 0);
  return total / freelancers.length;
}

// Function to generate a random freelancer and add to the array
function addRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20; // Random price between 20 and 120

  const newFreelancer = { name: randomName, price: randomPrice, occupation: randomOccupation };
  freelancers.push(newFreelancer);

  renderFreelancers();
}

// Initial rendering of freelancers
renderFreelancers();

// Set interval to add a freelancer and rerender every 3 seconds
setInterval(addRandomFreelancer, 3000);