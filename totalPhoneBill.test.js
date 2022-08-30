describe('totalPhoneBill Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("R4.05", totalPhoneBill("sms, sms, call"));

    });
    it('This should fail' , function(){
        assert.equal("R5.5", totalPhoneBill("call, sms, call"));

    });

});