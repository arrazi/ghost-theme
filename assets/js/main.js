// BBC Indonesia Inspired Ghost Theme JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    
    if (mobileMenuToggle && siteNav) {
        mobileMenuToggle.addEventListener('click', function() {
            siteNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Search toggle functionality
    const searchToggle = document.querySelector('.search-toggle');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', function() {
            // Add search functionality here
            console.log('Search clicked');
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Reading progress indicator
    function updateReadingProgress() {
        const article = document.querySelector('.post-content');
        if (!article) return;

        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        // Create or update progress bar
        let progressBar = document.querySelector('.reading-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'reading-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: var(--color-primary);
                z-index: 1000;
                transition: width 0.1s ease;
            `;
            document.body.appendChild(progressBar);
        }

        progressBar.style.width = (scrollPercent * 100) + '%';
    }

    // Add reading progress for posts
    if (document.querySelector('.post')) {
        window.addEventListener('scroll', updateReadingProgress);
    }

    // Image lazy loading (for older browsers)
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(function(img) {
            imageObserver.observe(img);
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                // Add newsletter subscription logic here
                console.log('Newsletter subscription:', email);
                
                // Show success message
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Berhasil!';
                button.style.background = '#28a745';
                
                setTimeout(function() {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 3000);
            }
        });
    }

    // Enhanced article hover effects
    const articles = document.querySelectorAll('.news-article, .breaking-article, .related-article');
    
    articles.forEach(function(article) {
        article.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        article.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Back to top button
    function createBackToTopButton() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Kembali ke atas');
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background: var(--color-primary);
            color: white;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            opacity: 0;
            transform: scale(0);
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        `;
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(button);
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                button.style.opacity = '1';
                button.style.transform = 'scale(1)';
            } else {
                button.style.opacity = '0';
                button.style.transform = 'scale(0)';
            }
        });
    }

    createBackToTopButton();

    // Table of contents for long posts
    function createTableOfContents() {
        const content = document.querySelector('.post-content');
        if (!content) return;

        const headings = content.querySelectorAll('h2, h3');
        if (headings.length < 3) return; // Only create TOC for posts with 3+ headings

        const toc = document.createElement('div');
        toc.className = 'table-of-contents';
        toc.innerHTML = '<h4>Daftar Isi</h4>';
        
        const list = document.createElement('ul');
        
        headings.forEach(function(heading, index) {
            const id = 'heading-' + index;
            heading.id = id;
            
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + id;
            link.textContent = heading.textContent;
            link.className = heading.tagName.toLowerCase();
            
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
        
        toc.appendChild(list);
        
        // Insert TOC after the first paragraph
        const firstParagraph = content.querySelector('p');
        if (firstParagraph) {
            firstParagraph.parentNode.insertBefore(toc, firstParagraph.nextSibling);
        }
        
        // Style the TOC
        toc.style.cssText = `
            background: var(--color-accent);
            padding: 2rem;
            border-radius: 0.8rem;
            margin: 3rem 0;
            border-left: 4px solid var(--color-primary);
        `;
    }

    createTableOfContents();

    // Enhanced typography improvements
    function improveTypography() {
        // Add smart quotes and em dashes
        const textNodes = document.querySelectorAll('.post-content p, .post-content blockquote');
        
        textNodes.forEach(function(node) {
            if (node.textContent) {
                node.innerHTML = node.innerHTML
                    .replace(/"/g, '"')
                    .replace(/"/g, '"')
                    .replace(/'/g, ''')
                    .replace(/'/g, ''')
                    .replace(/--/g, '—');
            }
        });
    }

    improveTypography();
});

// Copy to clipboard function for share buttons
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification('Link berhasil disalin!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Link berhasil disalin!');
    }
}

// Show notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--color-primary);
        color: white;
        padding: 1.2rem 2rem;
        border-radius: 0.4rem;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(function() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(function() {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Search functionality (basic implementation)
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        
        clearTimeout(searchTimeout);
        
        if (query.length < 3) {
            searchResults.innerHTML = '';
            return;
        }
        
        searchTimeout = setTimeout(function() {
            performSearch(query);
        }, 300);
    });
}

function performSearch(query) {
    // This is a basic client-side search
    // In a real implementation, you'd want to use Ghost's API or a search service
    
    const articles = document.querySelectorAll('.news-article');
    const results = [];
    
    articles.forEach(function(article) {
        const title = article.querySelector('.article-title').textContent;
        const excerpt = article.querySelector('.article-excerpt');
        const content = title + (excerpt ? excerpt.textContent : '');
        
        if (content.toLowerCase().includes(query.toLowerCase())) {
            results.push({
                title: title,
                url: article.querySelector('a').href,
                excerpt: excerpt ? excerpt.textContent : ''
            });
        }
    });
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p>Tidak ada hasil yang ditemukan.</p>';
        return;
    }
    
    const html = results.map(function(result) {
        return `
            <div class="search-result">
                <h4><a href="${result.url}">${result.title}</a></h4>
                ${result.excerpt ? `<p>${result.excerpt}</p>` : ''}
            </div>
        `;
    }).join('');
    
    searchResults.innerHTML = html;
}