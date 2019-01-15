function getUrl() {
    var url = new URLSearchParams(window.location.search);
    var findParam = url.get('profile');
    
    return findParam;
}

function formSubmit() {
    var btn = document.getElementById('questionFormBtn');
    btn.addEventListener('click', function(e) {
        e.preventDefault();

        var input = document.getElementById('employees');
        var inputValue = input.value;
        var url = "http://localhost:3000?numberOfEmployees=" + inputValue + "&profile=" + getUrl();

        window.location.href = url;
    });
}

formSubmit();
