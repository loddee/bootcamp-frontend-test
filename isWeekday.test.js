describe('Isweekday Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("true", isWeekday("Monday"));

    });
    it('This should fail' , function(){
        assert.equal("true", isWeekday("Saturday"));

    });

});