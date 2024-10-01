 // Function to handle click event
 function handleClick(event) {
    event.preventDefault(); // Prevent default link behavior

    const link = event.currentTarget;
    link.classList.add('shake-horizontal'); // Add shake class

    // Use setTimeout to redirect after animation
    setTimeout(() => {
        window.location.href = link.href; // Redirect to the link's href
    }, 800); // Delay for the duration of the animation
}

// Attach click event listener to each link
document.querySelectorAll('ol a').forEach(link => {
    link.addEventListener('click', handleClick);
});