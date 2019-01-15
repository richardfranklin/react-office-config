function formSubmit() {
    var btn = document.getElementById('questionFormBtn');
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input = document.getElementById('employees');
        var inputValue = input.value;
        var url = "http://localhost:3000?profile=kitchen&numberOfEmployees=" + inputValue;

        window.location.href = url;
    });
}

formSubmit();
