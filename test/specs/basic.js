/**
 * Validating Chat properties
 */

const assert = require('assert');

describe('Chat status should be unavailable', () => {
    it('The chat should have the right status', () => {
        browser.url('https://elguntors-stg.salesfloor.net/lol56eff3d6ed8b9');
        browser.maximizeWindow();
        const chat = $('.status__text--is-active').getText();
        //console.log(chat);
        assert.equal(chat, 'Unavailable');
    });
    
});

describe('Checking Chat status color', () => {
    it('The chat status color should be red', () => {
        const chatColor = $('.status__text--is-off').getCSSProperty('color');
        assert.equal(chatColor.value, 'rgb(238,12,12)');
    });
});

/*

describe('Get my Update link', () => {
    it('should have send an email from form ', () => {
        
        $('/html/body/div[2]/div/section[1]/footer/ul/li[2]/a').click();

        browser.switchToFrame(5); // inscription iframe
        
        $('#newsletterInscEmail').setValue('soccer@grr.la');        
        
        $('/html/body/div[1]/div/div[2]/div/form/fieldset/div/footer/div/button').click();
        // assert.equal('/html/body/div[1]/div/div[2]/div/form/fieldset/div/footer/div/div/div/span[1]'.getText(), 'Thank you!');
        
        // confirmation message validation after submit the form
        const notification = $('.global-services__validation__message');
        notification.waitForExist(5000);

        assert.equal(notification.getText(), 'Thank you!\nYou are now signed up');
        browser.switchToParentFrame();
    });
});

*/

describe('Appointment Request', () => {
    it('The chat status color should be red', () => {
        $('#AtAppointmentLink').click();

        browser.switchToFrame(0); // '#bookAnAppointment'

        const phoneId = $('/html/body/div[1]/div[1]/div/div[2]/div/form/fieldset/div/div[2]/div/ul/li[2]/label' );
        phoneId.click();
   
        // calculating new date ( more 7 days) from current day
        let someDate = new Date();
        let todayDate = new Date();
        someDate.setDate(someDate.getDate() + 7); 
        newDate = ""+(someDate.getMonth()+1)+"/"+someDate.getDate()+"/"+ someDate.getFullYear().toString().substring(2);
        browser.pause(500);
        $('#choosenDatePlaceholder').click();
        browser.pause(500);
        // checing if the new date has the same month or not
        if (someDate.getMonth() != todayDate.getMonth()) {
            //if month is different -> click on next month button
            $('//*[@id="ui-datepicker-div"]/div/a[2]').click();
        }
       
        // find the appointment day and click
        const foundDay = $('.ui-state-default='+someDate.getDate() );
        foundDay.click();

        $('#choosenTime').selectByAttribute('value', '10:00 AM');
        $('#name').setValue('Bruce Lee');
        $('#email').setValue('myEmail@test.com');
        $('#autoSubscribe').click();
        $('#phone').setValue('514-999-8877');
        $('#extraInfo').setValue('Extra info inside What can I help you?');

        browser.keys("\uE055"); //PageDown

        // browser.pause(10000);

   
        $('/html/body/div[1]/div[1]/div/div[2]/div/form/fieldset/footer/div/button').click();

        const notifApp = $('.global-services__validation__title');
        notifApp.waitForExist(5000);

        assert.equal(notification.getText(), 'Thank you for your request!');

        browser.switchToParentFrame();

        
    });
});




