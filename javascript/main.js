$(document).ready(function() {

    let year = new Date().getFullYear();
    $('.ft-year').text(year);

    $('#searchProduct').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('.product').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    $('.login-btn').click(function (e) {
        e.preventDefault();

        let email = $('#email').val(),
            password = $('#password').val();

        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.');
            return;
        }

    });

    $('.my-slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('#feed-submit').click(function (e) {

        e.preventDefault();
        
        let name = $('#name').val(),
             email = $('#email').val(),
             message = $('#message').val();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return; 
        }
    
        let nameRegex = /^[a-zA-Zàáâäãåçèéêëìíîïðñòóôöõùúûüýÿ' -]{2,40}$/,
            emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            messageRegex = /^[a-zA-Z0-9.,'?!@#()$%&\s-]{1,500}$/;
                   

        
        if (!nameRegex.test(name)) {
            alert('Please enter a valid name (2-40 characters, alphabets, spaces, hyphens, or apostrophes).');
            return;
        }

        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (!messageRegex.test(message)) {
            alert('Message must be between 10 and 500 characters and can only contain letters, numbers, and common punctuation.');
            return;
        }

        alert('Thank you for your feedback!');
        window.location.reload();
    });
    
});

           
                    
    
             
    