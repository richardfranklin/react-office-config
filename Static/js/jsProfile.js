function profileSubmit() {
    var profile = document.getElementsByClassName('profile-button');

    for (var i = 0; i < profile.length; i ++) {
        profile[i].addEventListener('click', function(e) {
            e.preventDefault();
            var profileData = e.currentTarget.getAttribute('data-profile');
            var url = "type-form.html?profile=" + profileData;

            window.location.href = url;
        });
    }
}

profileSubmit();