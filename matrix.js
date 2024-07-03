const canvas = document.getElementById('matrixCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const letters = Array(256).join(1).split('');

        ctx.font = '20px monospace'; // Adjust font size here as well

        function draw() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            letters.map((y_pos, index) => {
                const text = String.fromCharCode(65 + Math.random() * 33);
                const x_pos = index * 20; // Adjust spacing according to new font size
                ctx.fillText(text, x_pos, y_pos);
                letters[index] = y_pos > canvas.height + Math.random() * 1e4 ? 0 : y_pos + 20; // Adjust step according to new font size
            });
        }

        setInterval(draw, 33);

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('loginWindow').style.display = 'none';
            document.getElementById('loadingScreen').style.display = 'flex';

            setTimeout(() => {
                document.getElementById('loadingScreen').style.display = 'none';
                document.getElementById('successScreen').style.display = 'flex';
            }, 3000); // Show loading screen for 3 seconds
        });