document.getElementById('open-modal').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Add a click event to the close button
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

        // // Close the modal if the background is clicked
        // window.onclick = function(event) {
        //     if (event.target === modal) {
        //         modal.style.display = 'none';
        //         document.body.style.overflow = 'auto'; // Re-enable scrolling
        //     }
        // };
});