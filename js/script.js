// Animate skill progress bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateSkills = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                const width = bar.getAttribute('data-level');
                const fill = bar.querySelector('.progress-fill');
                if (fill.style.width === '0%' || fill.style.width === '') {
                    fill.style.width = width + '%';
                }
            }
        });
    };
    
    // Initial check
    animateSkills();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkills);
    
    // Skill cards hover effect enhancement
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Tool items hover effect
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });
});