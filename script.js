$(document).ready(function() {
    startCountAnimation();
    
    function startCountAnimation() {
        $('#counter1').countTo({
            from: 0,
            to: 870,
            speed: 3000,
            refreshInterval: 50
        });
        
        $('#counter2').countTo({
            from: 0,
            to: 10000,
            speed: 3000,
            refreshInterval: 50
        });
        
        $('#counter3').countTo({
            from: 0,
            to: 20,
            speed: 3000,
            refreshInterval: 50
        });
        
        $('#counter4').countTo({
            from: 0,
            to: 94830,
            speed: 3000,
            refreshInterval: 50
        });
    }
});