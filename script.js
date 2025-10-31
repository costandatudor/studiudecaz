// JavaScript pentru toate paginile

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
            }
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Search functionality placeholder
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                alert('Funcționalitatea de căutare ar fi implementată aici în GitHub real.');
            }
        });
    }
    
    // Branch dropdown functionality
    const branchDropdown = document.querySelector('.branch-dropdown');
    
    if (branchDropdown) {
        branchDropdown.addEventListener('click', function() {
            alert('Dropdown-ul pentru branch-uri s-ar deschide aici în GitHub real.');
        });
    }
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons in the same group
            const parent = this.parentElement;
            const siblings = parent.querySelectorAll('.filter-btn');
            siblings.forEach(sib => sib.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
        });
    });
    
    // Issue/PR item click functionality
    const issueItems = document.querySelectorAll('.issue-item, .pr-item');
    
    issueItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                const link = this.querySelector('a');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
    
    // Simulate repository statistics updates
    function updateStats() {
        const watchCount = document.querySelector('.stat-link:nth-child(1) .stat-count');
        const forkCount = document.querySelector('.stat-link:nth-child(2) .stat-count');
        const starCount = document.querySelector('.stat-link:nth-child(3) .stat-count');
        
        if (watchCount && forkCount && starCount) {
            // Simulate increasing counts (in a real app, this would come from an API)
            setTimeout(() => {
                watchCount.textContent = parseInt(watchCount.textContent) + 1;
            }, 5000);
            
            setTimeout(() => {
                starCount.textContent = parseInt(starCount.textContent) + 1;
            }, 8000);
        }
    }
    
    updateStats();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Page-specific initialization
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'issues.html':
            console.log('Pagina Issues încărcată');
            // Issues-specific functionality
            break;
        case 'pull-requests.html':
            console.log('Pagina Pull Requests încărcată');
            // PR-specific functionality
            break;
        case 'projects.html':
            console.log('Pagina Projects încărcată');
            // Projects-specific functionality
            break;
        case 'insights.html':
            console.log('Pagina Insights încărcată');
            // Insights-specific functionality
            break;
        case 'wiki.html':
            console.log('Pagina Wiki încărcată');
            // Wiki-specific functionality
            break;
        default:
            console.log('Pagina principală (Code) încărcată');
    }
    
    console.log('Studiu de caz Git/GitHub - Toate paginile încărcate cu succes!');
});