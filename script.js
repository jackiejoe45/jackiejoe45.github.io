// Toggle sections (clickable elements)
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // Display relevant content in the right margin
        const sectionId = this.id;
        const rightMargin = document.getElementById('detailsSpace');
        
        let detailContent = '';
        
        // Customize content based on which section was clicked
        switch(sectionId) {
            case 'aboutme':
                detailContent = `
                    <div class="detail-content">
                        <h3>About Me</h3>
                        <p>I am a passionate Computer Engineering student with a strong foundation in both hardware and software development. My goal is to create innovative solutions that make a difference in people's lives.</p>
                        <p>With experience in embedded systems, software development, and a keen interest in AI and machine learning, I am constantly looking for new challenges and opportunities to grow.</p>
                    </div>
                `;
                break;
                
            case 'education':
                detailContent = `
                    <div class="detail-content">
                        <h3>Education Journey</h3>
                        <p>My educational background combines rigorous academic training with practical, hands-on experience.</p>
                        <p>At Ashesi University, I've been challenged to think critically and solve complex problems in Computer Engineering.</p>
                        <p>The ALX Software Engineering Program has provided me with industry-relevant skills and practical experience in software development.</p>
                    </div>
                `;
                break;
                
            case 'skills':
                detailContent = `
                    <div class="detail-content">
                        <h3>Skills Details</h3>
                        <p><strong>Programming Languages:</strong> Proficient in Python, Java, C, and web technologies including HTML, CSS, JavaScript, SQL, and PHP.</p>
                        <p><strong>Tools Expertise:</strong> Experienced with Git, GitHub, Arduino, Postman, Bash, DevOps workflows, text editors (Emacs, Vim), and testing methodologies.</p>
                        <p><strong>AI & Advanced Topics:</strong> Working knowledge of AI chatbots, prompt engineering, and fundamentals of deep learning applications.</p>
                    </div>
                `;
                break;
                
            case 'projects':
                detailContent = `
                    <div class="detail-content">
                        <h3>Project Highlights</h3>
                        <p><strong>Canvas Dark:</strong> A browser extension that reduces eye strain with custom themes - showcasing my front-end development skills.</p>
                        <p><strong>Attendance Recording System:</strong> Hardware-software integration project demonstrating embedded systems expertise.</p>
                        <p><strong>E-med:</strong> Mobile application addressing real healthcare challenges in local communities.</p>
                    </div>
                `;
                break;
                
            case 'experience':
                detailContent = `
                    <div class="detail-content">
                        <h3>Work Experience Insights</h3>
                        <p>My professional experience spans internships, externships, and part-time roles that have given me exposure to:</p>
                        <p>- Software engineering in industrial automation</p>
                        <p>- Investment analysis in the venture capital space</p>
                        <p>- IT support and web development for small businesses</p>
                        <p>These diverse experiences have shaped my problem-solving approach and technical versatility.</p>
                    </div>
                `;
                break;
                
            case 'certificates':
                detailContent = `
                    <div class="detail-content">
                        <h3>Certifications</h3>
                        <p>My certifications represent my commitment to continuous learning and skill development.</p>
                        <p>The Sololearn certificates in HTML, CSS, and Responsive Web Design validate my front-end development skills.</p>
                        <p>My externship certification and ongoing ALX program demonstrate my dedication to professional growth in software engineering.</p>
                    </div>
                `;
                break;
                
            default:
                detailContent = `
                    <div class="detail-content">
                        <h3>${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}</h3>
                        <p>This section highlights my ${sectionId}. Click on other sections to learn more about different aspects of my portfolio.</p>
                    </div>
                `;
        }
        
        rightMargin.innerHTML = detailContent;
        
        // Get the position of the clicked section relative to the viewport
        const sectionRect = this.getBoundingClientRect();
        const sidebarContainer = document.querySelector('.sidebar-content-wrapper');
        
        // Calculate where the sidebar content should be positioned
        // We want to align the top of the sidebar content with the top of the clicked section
        const topOffset = sectionRect.top; 
        
        // Set the sidebar content container's scroll position
        // This keeps the sidebar content aligned with the clicked section
        if (window.innerWidth > 768) { // Only do this on larger screens
            sidebarContainer.scrollTop = topOffset - sidebarContainer.getBoundingClientRect().top + sidebarContainer.scrollTop;
        }
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    
    // Toggle icons
    if (document.body.classList.contains('light-theme')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
});

// Close the dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('#downloadBtn') && !event.target.parentElement.matches('#downloadBtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Handle resume download options
document.getElementById('softwareEngineer').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Downloading Software Engineer Resume...');
    // In a real implementation, this would trigger a download of the specific resume
});

document.getElementById('dataScientist').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Downloading Data Scientist Resume...');
});

document.getElementById('uiuxDesigner').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Downloading UI/UX Designer Resume...');
});
