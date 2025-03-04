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
                
            case 'skills':
                detailContent = `
                    <div class="detail-content">
                        <h3>My Professional Capabilities</h3>
                        
                        <h4>Software Engineering</h4>
                        <p>With proficiency in Python, Java, C, and web technologies (HTML, CSS, JavaScript), I can develop robust applications across various platforms. My experience with data structures, algorithms, and object-oriented programming enables me to create efficient, scalable solutions. Tools like Git, GitHub, and testing frameworks support my development workflow.</p>
                        
                        <h4>UI/UX Design</h4>
                        <p>My design skills with Figma, Adobe XD, and Canva allow me to create intuitive, user-centered interfaces. I've designed multiple systems including MealPlan, DroneDrop, and School Management dashboards, focusing on user experience and accessibility. My understanding of responsive design principles ensures applications work seamlessly across all devices.</p>
                        
                        <h4>Data Science & AI</h4>
                        <p>I've developed skills in AI chatbots, prompt engineering, and deep learning. My work with the Twi Transcription Model demonstrates my ability to fine-tune AI models for specific applications. Using tools like Jupyter and Python libraries, I can analyze data, build models, and extract meaningful insights to drive decision-making.</p>
                        
                        <h4>Embedded Systems</h4>
                        <p>My experience with Arduino, Raspberry Pi, STM32, and ESP32 enables me to develop hardware solutions for real-world problems. I've created systems for attendance tracking and other IoT applications, combining software expertise with hardware knowledge.</p>
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
                        <p>Hi👋
                        I'm Ben Charles.</p>
                        <h3>Welcome to my Portfolio</h3>
                        <p>Click on any section to view more details. This space will display additional information about the selected section.</p>
                        <p>I'm a Computer Engineering Major with a passion for Software Development and Engineering. Feel free to explore my education, experience, and projects.</p>
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

// Set initial theme and image on page load
document.addEventListener('DOMContentLoaded', function() {
    const profileImage = document.getElementById('profileImage');
    const signatureImage = document.getElementById('signatureImage');
    
    // Check if body has dark-theme class (default is light)
    if (document.body.classList.contains('dark-theme')) {
        profileImage.src = 'images/profile-brown.jpg';
        signatureImage.src = 'images/signature-white.png';
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        // Add light-theme class if not already present
        document.body.classList.add('light-theme');
        profileImage.src = 'images/profile-green.jpg';
        signatureImage.src = 'images/signature-black.png';
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    }
});

// Handle theme toggle click
themeToggle.addEventListener('click', function() {
    const profileImage = document.getElementById('profileImage');
    const signatureImage = document.getElementById('signatureImage');
    
    // Toggle theme classes
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    
    // Set the images based on the current theme
    if (document.body.classList.contains('dark-theme')) {
        profileImage.src = 'images/profile-brown.jpg';
        signatureImage.src = 'images/signature-white.png';
    } else {
        profileImage.src = 'images/profile-green.jpg';
        signatureImage.src = 'images/signature-black.png';
    }
    
    // Toggle sun/moon icons
    if (moonIcon.style.display === 'none') {
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
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
