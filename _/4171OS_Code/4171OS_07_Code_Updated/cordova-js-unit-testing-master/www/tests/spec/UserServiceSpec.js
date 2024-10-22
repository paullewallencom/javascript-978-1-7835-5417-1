describe("UserService", function() {
    var userService;

    beforeEach(function() {
        userService = UserService.getInstance();
    });
         
    it("should NOT be able to save a user with an empty user name", function() {
        var user = {
            'name': ' ',
            'email': 'hazems@apache.org'
        };
            
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
       });
         
    it("should NOT be able to save a user with invalid email", function() {
        var user = {
            'name': 'Hazem',
            'email': 'Invalid_Email'
        };
            
        expect(function() {
                   userService.saveUser(user);
               }).toThrow();
    });
         
    it("should NOT be able to save a user with a user name more than 6 characters", function() {
        var user = {
            'name': 'LengthyUserName',
            'email': 'hazems@apache.org'
            };
            
        expect(function() {
                   userService.saveUser(user);
              }).toThrow();
    });
         
    it("should be able to save and load a valid user", function() {
        var originalUser = {
            'name': 'Hazem',
            'email': 'hazems@apache.org'
        };
            
        userService.saveUser(originalUser);
            
        var user = userService.getUser();
            
        expect(user).toEqual(originalUser);
    });
});
