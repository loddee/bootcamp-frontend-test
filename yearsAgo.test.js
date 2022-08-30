describe('YearsAgo Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("22", yearsAgo("2000"));

    });
    it('This should fail' , function(){
        assert.equal("24", yearsAgo("1999"));

    });

});