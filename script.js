$(document).ready(function() {
    startCountAnimation();
    
    function startCountAnimation() {
        $('#counter1').countTo({
            from: 0,
            to: 870,
            speed: 5000,
            refreshInterval: 50
        });
        
        $('#counter2').countTo({
            from: 0,
            to: 10000,
            speed: 5000,
            refreshInterval: 50
        });
        
        $('#counter3').countTo({
            from: 0,
            to: 20,
            speed: 5000,
            refreshInterval: 50
        });
        
        $('#counter4').countTo({
            from: 0,
            to: 94830,
            speed: 5000,
            refreshInterval: 50
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const toastElement = document.getElementById('liveToast');
  
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
    
    contactForm.reset();
  });
});