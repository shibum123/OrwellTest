describe('User Authentication', function () {
    
    var userInput, loginButton, passwordInput;
                
    beforeAll(function (done) {
        return browser.get('http://localhost:8088')
            .then(function(){
                userInput = element(by.id("username"));
                passwordInput = element(by.id("userpassword"));
                loginButton = element(by.css(' [data-ng-click="login(credentials)"]'));
                return true;
            })
            .then(done);
    });

    
    it('The Log In screen must have two fields that the user can input information into, titled \'User ID\' and \'Password\'', function () {

        var userLabel = element(by.id('userLabel'));
        var passwordLabel = element(by.id('passwordLabel'));
        
        expect(userLabel.getText()).toBe('User ID');
        expect(passwordLabel.getText()).toBe('Password');
        
        expect(userInput.isPresent()).toBe(true);
        expect(passwordInput.isPresent()).toBe(true);

    });
    
});