document.querySelectorAll('.fielder').forEach(fielder => {
    fielder.addEventListener('click', () => {
        const isActive = fielder.classList.contains('active');
        fielder.classList.toggle('active', !isActive); // Toggle 'active' class
        console.log(`Toggled ${fielder.id}, Active: ${!isActive}`);
    });
});


