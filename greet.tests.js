describe('Greet Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("Hello, Atlegang", greet("Atlegang"));

    });
    it('This should fail' , function(){
        assert.equal("Dolly", greet("Atlegang"));

    });

});










