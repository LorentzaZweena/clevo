function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            let increment = target / speed;
            
            if (target <= 100) {
                increment = Math.max(1, increment);
            } else {
                increment = Math.ceil(increment);
            }
            
            if (count < target) {
                counter.innerText = Math.min(count + increment, target);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    const counterSection = document.querySelector('.counter');
    if (counterSection) {
        observer.observe(counterSection);
    }
});
