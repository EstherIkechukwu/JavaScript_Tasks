public void checkAccountValidity(String firstName, String lastName, String pin) {
        if(firstName == null || firstName.trim().isEmpty()) {
            throw new IllegalArgumentException("Invalid input! Please enter your first name");
        }
        if(lastName == null || lastName.trim().isEmpty()) {
            throw new IllegalArgumentException("Invalid input! Please enter your last name");
        }
        if(pin == null || pin.trim().isEmpty()) {
            throw new IllegalArgumentException("Invalid input! Please enter your pin");
        }
        
    }