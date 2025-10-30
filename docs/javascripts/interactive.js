// Interactive Navigation
class InteractiveNav {
  constructor() {
    this.navItems = document.querySelectorAll('.nav-section');
    this.init();
  }

  init() {
    this.setupNavItems();
    this.setupMobileMenu();
    this.setupScrollSpy();
  }

  setupNavItems() {
    this.navItems.forEach(item => {
      const header = item.querySelector('.nav-section-header');
      if (header) {
        header.addEventListener('click', () => this.toggleSection(item));
        // Add chevron icon
        const chevron = document.createElement('span');
        chevron.className = 'nav-chevron';
        chevron.innerHTML = '\uE70D'; // Chevron right icon
        header.prepend(chevron);
      }
    });
  }

  toggleSection(section) {
    const content = section.querySelector('.nav-section-content');
    const chevron = section.querySelector('.nav-chevron');
    const isExpanded = section.getAttribute('aria-expanded') === 'true';
    
    section.setAttribute('aria-expanded', !isExpanded);
    content.style.maxHeight = isExpanded ? '0' : `${content.scrollHeight}px`;
    chevron.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(90deg)';
  }

  setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.sidebar-nav');
    
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
          menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
      });
    }
  }

  setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.toc a');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
  }
}

// Search Functionality
class SearchManager {
  constructor() {
    this.searchInput = document.querySelector('.search-input');
    this.searchResults = document.querySelector('.search-results');
    this.searchHistory = [];
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.setupSearch();
      this.loadSearchHistory();
    }
  }

  setupSearch() {
    let debounceTimer;
    
    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim();
      
      if (query.length > 2) {
        debounceTimer = setTimeout(() => this.performSearch(query), 300);
      } else {
        this.clearResults();
      }
    });

    // Handle keyboard navigation
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.searchInput.value.trim()) {
        this.saveToHistory(this.searchInput.value.trim());
      }
    });
  }

  async performSearch(query) {
    try {
      // This would be replaced with actual search API call
      const results = await this.mockSearch(query);
      this.displayResults(results);
    } catch (error) {
      console.error('Search failed:', error);
    }
  }

  displayResults(results) {
    if (!results.length) {
      this.searchResults.innerHTML = '<div class="no-results">No results found</div>';
      return;
    }

    const html = results.map(result => `
      <div class="search-result-item">
        <h4><a href="${result.url}">${this.highlightMatches(result.title)}</a></h4>
        <p>${this.highlightMatches(result.snippet)}</p>
        <div class="search-meta">
          <span class="category">${result.category}</span>
          <span class="date">${result.date}</span>
        </div>
      </div>
    `).join('');

    this.searchResults.innerHTML = html;
    this.searchResults.style.display = 'block';
  }

  highlightMatches(text) {
    const query = this.searchInput.value.trim();
    if (!query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  clearResults() {
    if (this.searchResults) {
      this.searchResults.style.display = 'none';
    }
  }

  saveToHistory(query) {
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query);
      this.searchHistory = this.searchHistory.slice(0, 5);
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }
  }

  loadSearchHistory() {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      this.searchHistory = JSON.parse(history);
    }
  }

  // Mock search function - replace with actual search implementation
  async mockSearch(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          {
            title: `How to ${query} in Windows 11`,
            snippet: `Learn how to ${query} with step-by-step instructions for Windows 11.`,
            category: 'Tutorial',
            date: '2023-10-30',
            url: `#${query.toLowerCase().replace(/\s+/g, '-')}`
          },
          {
            title: `Troubleshooting ${query} issues`,
            snippet: `Common problems and solutions when trying to ${query} in Windows 11.`,
            category: 'Troubleshooting',
            date: '2023-10-29',
            url: `#troubleshooting-${query.toLowerCase().replace(/\s+/g, '-')}`
          }
        ]);
      }, 300);
    });
  }
}

// Code Components
class CodeManager {
  constructor() {
    this.codeBlocks = document.querySelectorAll('pre code');
    this.init();
  }

  init() {
    if (this.codeBlocks.length) {
      this.setupCodeBlocks();
    }
  }

  setupCodeBlocks() {
    this.codeBlocks.forEach(block => {
      // Add copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.setAttribute('aria-label', 'Copy code to clipboard');
      copyButton.innerHTML = '\uE8C8'; // Copy icon
      
      // Add language label
      const language = this.getLanguage(block);
      const languageLabel = document.createElement('span');
      languageLabel.className = 'code-language';
      languageLabel.textContent = language;
      
      // Create wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrapper';
      
      // Insert elements
      const parent = block.parentNode;
      parent.replaceChild(wrapper, block);
      wrapper.appendChild(block);
      wrapper.appendChild(copyButton);
      wrapper.appendChild(languageLabel);
      
      // Add copy functionality
      copyButton.addEventListener('click', () => this.copyToClipboard(block, copyButton));
    });
    
    // Setup tabbed code blocks
    this.setupTabbedCodeBlocks();
  }

  getLanguage(block) {
    const classList = block.className.split(' ');
    const langClass = classList.find(cls => cls.startsWith('language-'));
    return langClass ? langClass.replace('language-', '') : 'text';
  }

  async copyToClipboard(block, button) {
    try {
      await navigator.clipboard.writeText(block.textContent);
      button.innerHTML = '\uE8FB'; // Checkmark icon
      button.classList.add('copied');
      setTimeout(() => {
        button.innerHTML = '\uE8C8'; // Reset to copy icon
        button.classList.remove('copied');
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      button.textContent = 'Error';
    }
  }

  setupTabbedCodeBlocks() {
    const tabGroups = document.querySelectorAll('.code-tabs');
    
    tabGroups.forEach(group => {
      const tabs = group.querySelectorAll('.code-tab');
      const tabButtons = group.querySelectorAll('.code-tab-button');
      
      if (tabs.length && tabButtons.length) {
        // Show first tab by default
        this.showTab(tabs[0].id);
        
        tabButtons.forEach(button => {
          button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            this.showTab(tabId);
            
            // Update active state
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
          });
        });
      }
    });
  }

  showTab(tabId) {
    const tab = document.getElementById(tabId);
    if (tab) {
      // Hide all tabs in the same group
      const group = tab.closest('.code-tabs');
      if (group) {
        group.querySelectorAll('.code-tab').forEach(t => {
          t.style.display = 'none';
        });
      }
      
      // Show selected tab
      tab.style.display = 'block';
    }
  }
}

// Responsive Utilities
class ResponsiveManager {
  constructor() {
    this.currentBreakpoint = this.getCurrentBreakpoint();
    this.init();
  }

  init() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.setupTouchTargets();
  }

  getCurrentBreakpoint() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  handleResize() {
    const newBreakpoint = this.getCurrentBreakpoint();
    
    if (newBreakpoint !== this.currentBreakpoint) {
      this.currentBreakpoint = newBreakpoint;
      this.handleBreakpointChange(newBreakpoint);
    }
  }

  handleBreakpointChange(breakpoint) {
    // Handle any breakpoint-specific logic here
    console.log(`Breakpoint changed to: ${breakpoint}`);
    
    // Example: Toggle mobile menu on breakpoint change
    const nav = document.querySelector('.sidebar-nav');
    if (nav && breakpoint === 'mobile') {
      nav.classList.remove('active');
    }
  }

  setupTouchTargets() {
    // Ensure touch targets are at least 44x44px for mobile
    const touchElements = document.querySelectorAll('button, a, [role="button"]');
    touchElements.forEach(el => {
      el.style.minHeight = '44px';
      el.style.minWidth = '44px';
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  if (document.querySelector('.nav-section')) {
    new InteractiveNav();
  }
  
  // Initialize search
  if (document.querySelector('.search-input')) {
    new SearchManager();
  }
  
  // Initialize code blocks
  if (document.querySelector('pre code')) {
    new CodeManager();
  }
  
  // Initialize responsive behavior
  new ResponsiveManager();
});
