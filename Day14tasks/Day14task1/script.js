fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
  const users = data;
  const itemsPerPage = 2;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  let currentPage = 1;

  // Function to display users for the current page
  const displayUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    const paginationContainer = document.getElementById('paginationContainer');
    paginationContainer.innerHTML = '';

    // Display users in cards
    usersToDisplay.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
      paginationContainer.appendChild(card);
    });

    // Generate pagination buttons
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.innerText = 'Prev';
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayUsers();
      }
    });
    pagination.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.innerText = i;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayUsers();
      });
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pagination.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayUsers();
      }
    });
    pagination.appendChild(nextButton);

    paginationContainer.appendChild(pagination);
  };

  // Initial display
  displayUsers();
});
