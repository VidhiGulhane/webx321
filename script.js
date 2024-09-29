// search logic 
document.getElementById('search-icon').addEventListener('click', function() {
    this.classList.toggle('active');
    
    const searchInput = document.getElementById('search-input');
    searchInput.classList.toggle('active');
    
    // Console the search input element
    console.log('Search Input Element:', searchInput);
    
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});

// document.getElementById('termsForm').addEventListener('submit', function(e) {
//     const agreeTerms = document.getElementById('agreeTerms');
//     if (!agreeTerms.checked) {
//         e.preventDefault(); // Prevent the form from submitting
//         alert('Please agree to the terms and conditions before submitting.');
//     }
// });s