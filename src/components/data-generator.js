const lineData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: []
  };
  
  function getRandomScope() {
    return Math.floor(Math.random() * 3) + 1; // Generates random scope: 1, 2, or 3
  }
  
  function getRandomType() {
    const types = ['Building', 'Heating', 'Travel', 'Transport', 'Industrial'];
    const randomIndex = Math.floor(Math.random() * types.length);
    return types[randomIndex]; // Returns a random type from the array
  }
  
  function generateData() {
    for (let year = 2021; year <= 2023; year++) {
      for (let asset = 1; asset <= 8; asset++) {
        const data = [];
        for (let i = 0; i < 12; i++) {
          data.push(Math.floor(Math.random() * 101) + 20); // Generates random data between 20 and 200
        }
        lineData.datasets.push({
          label: `Emissions Data #${asset} - ${year}`,
          data,
          fill: true,
          backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`,
          borderColor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
          tension: 0.1,
          year,
          scope: getRandomScope(), // Random scope: 1, 2, or 3
          emissionstype: getRandomType(), // Random type: Building, Heating, Travel, Transport, or Industrial
        });
      }
    }
  }
  
  generateData(); // Call the function to generate the data
  
  // Print the generated lineData to the console
  console.log(lineData);
