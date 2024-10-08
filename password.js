let security_key = document.getElementById("passcode");
      function Password() {
        if (security_key.type === "password") {
          security_key.type = "text";
        } else {
          security_key.type = "password";
        }
      }