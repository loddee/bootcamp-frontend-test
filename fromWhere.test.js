describe('fromWhere Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("Bellville", fromWhere("CY"));

    });
    it('This should fail' , function(){
        assert.equal("paarl", fromWhere("CA"));

    });

});