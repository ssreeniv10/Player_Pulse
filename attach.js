<script>
    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            window.location.href = "home.html";
            return false;
        } else {
            alert("Please enter valid credentials.");
            return false;
        }
    }
</script>
