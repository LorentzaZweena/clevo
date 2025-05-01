document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "Apa itu HTML?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Multi Language",
                "Hyper Transfer Markup Language",
                "Hyperlink Text Management Language"
            ],
            correctAnswer: 0
        },
        {
            question: "Berikut ini yang BUKAN merupakan paradigma pemrograman adalah?",
            options: [
                "Object-Oriented Programming",
                "Functional Programming",
                "Procedural Programming",
                "Descriptive Programming"
            ],
            correctAnswer: 3
        },
        {
            question: "Berapakah kompleksitas waktu (time complexity) dari binary search?",
            options: [
                "O(n)",
                "O(n²)",
                "O(log n)",
                "O(n log n)"
            ],
            correctAnswer: 2
        },
        {
            question: "Struktur data mana yang bekerja dengan prinsip LIFO (Last In, First Out)?",
            options: [
                "Queue",
                "Stack",
                "Linked List",
                "Tree"
            ],
            correctAnswer: 1
        },
        {
            question: "Apa tujuan normalisasi dalam perancangan basis data?",
            options: [
                "Untuk meningkatkan redundansi data",
                "Untuk meminimalkan redundansi dan ketergantungan data",
                "Untuk meningkatkan performa query secara ekstrem",
                "Untuk menggabungkan semua tabel menjadi satu tabel"
            ],
            correctAnswer: 1
        },
        {
            question: "Manakah dari alamat IP berikut yang valid?",
            options: [
                "192.168.1.256",
                "172.16.0.1",
                "256.255.255.0",
                "10.0.0.0.1"
            ],
            correctAnswer: 1
        },
        {
            question: "Apa kepanjangan dari SQL?",
            options: [
                "Structured Query Language",
                "Simple Question Language",
                "Structured Question Logic",
                "System Query Language"
            ],
            correctAnswer: 0
        },
        {
            question: "Lapisan manakah dalam model OSI yang bertanggung jawab untuk routing?",
            options: [
                "Data Link Layer",
                "Transport Layer",
                "Network Layer",
                "Session Layer"
            ],
            correctAnswer: 2
        },
        {
            question: "Apa fungsi utama dari sistem operasi?",
            options: [
                "Menyediakan antarmuka pengguna",
                "Mengelola sumber daya perangkat keras",
                "Menjalankan aplikasi",
                "Semua jawaban benar"
            ],
            correctAnswer: 3
        },
        {
            question: "Manakah dari berikut ini yang BUKAN jenis pengujian perangkat lunak?",
            options: [
                "Unit Testing",
                "Integration Testing",
                "Compilation Testing",
                "Regression Testing"
            ],
            correctAnswer: 2
        },
        {
            question: "Apa tujuan dari firewall dalam keamanan jaringan?",
            options: [
                "Untuk mencegah akses yang tidak sah",
                "Untuk mengenkripsi data",
                "Untuk mempercepat lalu lintas jaringan",
                "Untuk mengompres data"
            ],
            correctAnswer: 0
        },
        {
            question: "Manakah dari berikut ini adalah database NoSQL?",
            options: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "Oracle"
            ],
            correctAnswer: 2
        },
        {
            question: "Apa kepanjangan dari API?",
            options: [
                "Application Programming Interface",
                "Application Process Integration",
                "Automated Programming Interface",
                "Application Protocol Interface"
            ],
            correctAnswer: 0
        },
        {
            question: "Pola desain (design pattern) mana yang digunakan untuk membuat objek dalam satu langkah?",
            options: [
                "Factory Pattern",
                "Singleton Pattern",
                "Observer Pattern",
                "Decorator Pattern"
            ],
            correctAnswer: 0
        },
        {
            question: "Apa tujuan dari sistem kontrol versi seperti Git?",
            options: [
                "Untuk mengompilasi kode lebih cepat",
                "Untuk melacak perubahan dalam kode sumber dari waktu ke waktu",
                "Untuk secara otomatis memperbaiki bug dalam kode",
                "Untuk mengoptimalkan eksekusi kode"
            ],
            correctAnswer: 1
        },
        {
            question: "Manakah dari berikut ini yang BUKAN prinsip pemrograman berorientasi objek?",
            options: [
                "Encapsulation",
                "Inheritance",
                "Polymorphism",
                "Fragmentation"
            ],
            correctAnswer: 3
        },
        {
            question: "Apa fungsi dari kompiler?",
            options: [
                "Menjalankan kode baris demi baris",
                "Menerjemahkan bahasa tingkat tinggi ke kode mesin",
                "Melakukan debug terhadap kode",
                "Mengoptimalkan query basis data"
            ],
            correctAnswer: 1
        },
        {
            question: "Protokol manakah yang digunakan untuk penjelajahan web yang aman?",
            options: [
                "HTTP",
                "FTP",
                "HTTPS",
                "SMTP"
            ],
            correctAnswer: 2
        },
        {
            question: "Apa tujuan dari ERD (Entity Relationship Diagram) dalam perancangan basis data?",
            options: [
                "Menunjukkan hubungan antar entitas",
                "Menampilkan alur eksekusi program",
                "Menggambarkan topologi jaringan",
                "Mendokumentasikan struktur kode"
            ],
            correctAnswer: 0
        },
        {
            question: "Manakah dari berikut ini yang merupakan ciri khas komputasi awan (cloud computing)?",
            options: [
                "Skalabilitas terbatas",
                "Layanan mandiri sesuai permintaan",
                "Alokasi sumber daya tetap",
                "Hanya bisa diakses secara offline"
            ],
            correctAnswer: 1
        }
    ];
    

    let currentQuestion = 0;
    const userAnswers = new Array(questions.length).fill(null);
    const questionNumbersContainer = document.querySelector('.question-numbers');
    for (let i = 0; i < questions.length; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'question-number';
        numberDiv.textContent = i + 1;
        numberDiv.dataset.index = i;
        
        numberDiv.addEventListener('click', function() {
            navigateToQuestion(parseInt(this.dataset.index));
        });
        
        questionNumbersContainer.appendChild(numberDiv);
    }
    
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = `question ${index === 0 ? 'active' : ''}`;
        questionDiv.dataset.index = index;
        
        const questionText = document.createElement('p');
        questionText.className = 'fw-bold mb-3';
        questionText.textContent = q.question;
        questionDiv.appendChild(questionText);
        
        q.options.forEach((option, optionIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'form-check';
            
            const input = document.createElement('input');
            input.className = 'form-check-input option-input';
            input.type = 'radio';
            input.name = `question-${index}`;
            input.id = `q${index}-option${optionIndex}`;
            input.value = optionIndex;
            
            input.addEventListener('change', function() {
                userAnswers[index] = parseInt(this.value);
                updateQuestionNumberStatus(index, true);
                updateAnsweredCount();
            });
            
            const label = document.createElement('label');
            label.className = 'form-check-label option-label';
            label.htmlFor = `q${index}-option${optionIndex}`;
            label.textContent = option;
            
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            questionDiv.appendChild(optionDiv);
        });
        
        questionContainer.appendChild(questionDiv);
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            navigateToQuestion(currentQuestion - 1);
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentQuestion < questions.length - 1) {
            navigateToQuestion(currentQuestion + 1);
        }
    });

    function navigateToQuestion(index) {
        document.querySelector(`.question[data-index="${currentQuestion}"]`).classList.remove('active');
        document.querySelector(`.question-number[data-index="${currentQuestion}"]`).classList.remove('active');
        currentQuestion = index;
        document.querySelector(`.question[data-index="${currentQuestion}"]`).classList.add('active');
        document.querySelector(`.question-number[data-index="${currentQuestion}"]`).classList.add('active');

        document.getElementById('current-question-label').textContent = `Question ${currentQuestion + 1}`;
 
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = currentQuestion === questions.length - 1;
    }

    function updateQuestionNumberStatus(index, answered) {
        const questionNumber = document.querySelector(`.question-number[data-index="${index}"]`);
        if (answered) {
            questionNumber.classList.add('answered');
        } else {
            questionNumber.classList.remove('answered');
        }
    }

    function updateAnsweredCount() {
        const answeredCount = userAnswers.filter(answer => answer !== null).length;
        document.getElementById('answered-count').textContent = answeredCount;
    }
    document.querySelector(`.question-number[data-index="0"]`).classList.add('active');
    let timeLeft = 60 * 60;
    const timerElement = document.getElementById('timer');
    
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('Waktu abis!');
            submitExam();
        } else {
            timeLeft--;
        }
    }
    
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();
    const submitBtn = document.getElementById('submit-exam');
    const confirmSubmitBtn = document.getElementById('confirm-submit');
    const submitModal = new bootstrap.Modal(document.getElementById('submitModal'));
    
    submitBtn.addEventListener('click', function() {
        updateAnsweredCount();
        submitModal.show();
    });
    
    confirmSubmitBtn.addEventListener('click', function() {
        submitExam();
    });
    
    function submitExam() {
        clearInterval(timerInterval);
        submitModal.hide();
        let score = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });

        questionContainer.innerHTML = `
            <div class="alert-info">
                <h4 class="alert-info">Soal selesai!</h4>
                <p>Nilai anda: ${score} dari ${questions.length}</p>
                <p>Persentase: ${Math.round((score / questions.length) * 100)}%</p>
            </div>
        `;
        
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        submitBtn.disabled = true;
        const questionNumbers = document.querySelectorAll('.question-number');
        questionNumbers.forEach(num => {
            num.style.pointerEvents = 'none';
        });
    }
});
