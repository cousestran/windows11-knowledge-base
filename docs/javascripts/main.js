// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize components
  initProgressSteps();
  initSearch();
  initTooltips();  
  initSmoothScroll();
  initResponsiveNavigation();
});

/**
 * Initialize progress steps functionality
 */
function initProgressSteps() {
  const steps = document.querySelectorAll('.step');
  
  steps.forEach(step => {
    step.addEventListener('click', function() {
      const stepNumber = this.getAttribute('data-step');
      
      // Update active state
      steps.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
      
      // Update progress bar
      const progress = (stepNumber / steps.length) * 100;
      document.querySelector('.progress').style.width = `${progress}%`;
      
      // Scroll to corresponding step content if it exists
      const targetContent = document.querySelector(`.getting-started .step[data-step="${stepNumber}"]`);
      if (targetContent) {
        targetContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Initialize search functionality
 */
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchButton = document.querySelector('.search-button');
  
  if (searchInput && searchButton) {
    // Focus search input on page load if it's empty
    if (!searchInput.value.trim()) {
      searchInput.focus();
    }
    
    // Handle search submission
    const performSearch = () => {
      const query = searchInput.value.trim();
      if (query) {
        // In a real implementation, this would redirect to search results
        console.log('Searching for:', query);
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    };
    
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

/**
 * Initialize tooltips for interactive elements
 */
function initTooltips() {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  
  tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', showTooltip);
    element.addEventListener('mouseleave', hideTooltip);
    element.addEventListener('focus', showTooltip);
    element.addEventListener('blur', hideTooltip);
  });
  
  function showTooltip(e) {
    const tooltipText = this.getAttribute('data-tooltip');
    if (!tooltipText) return;
    
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    
    document.body.appendChild(tooltip);
    
    const rect = this.getBoundingClientRect();
    const tooltipHeight = tooltip.offsetHeight;
    const tooltipWidth = tooltip.offsetWidth;
    
    // Position tooltip above the element
    tooltip.style.top = `${window.scrollY + rect.top - tooltipHeight - 8}px`;
    tooltip.style.left = `${window.scrollX + rect.left + (rect.width / 2) - (tooltipWidth / 2)}px`;
    
    // Add active class for animation
    setTimeout(() => tooltip.classList.add('active'), 10);
  }
  
  function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }
}

/**
 * Enable smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Handle responsive navigation
 */
function initResponsiveNavigation() {
  const menuButton = document.querySelector('.md-header__button--menu');
  const sidebar = document.querySelector('.md-sidebar--primary');
  
  if (menuButton && sidebar) {
    menuButton.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && e.target !== menuButton) {
        document.body.classList.remove('nav-open');
      }
    });
  }
}

/**
 * Debounce function to limit how often a function can be called
 */
function debounce(func, wait) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Add a class to the html element for feature detection
if ('ontouchstart' in window || navigator.maxTouchPoints) {
  document.documentElement.classList.add('touch-device');
} else {
  document.documentElement.classList.add('no-touch-device');
}
