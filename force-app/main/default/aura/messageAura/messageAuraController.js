({
    sendHandler : function(component, event, helper) {
        const inputElement = component.find("inputBox");
        if(inputElement){
            const msg = inputElement.get("v.value");

            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value:msg,
                from:"AURA"
            });
            component.set("v.messages", messages);
           

            const msgPayload  = {
                message:msg,
                from:"AURA"
            };
            
            const msgChannel = component.find("messageChannel");
            msgChannel.publish(msgPayload);           
           
        }

    },

    messagehandler :  function(component, event, helper) {
        //method defination goes here
        alert(event);
        console.log(event);
        if(event && event.getParam("message") && event.getParam("from") != "AURA" ){
            const msg =  event.getParam("message");
            console.log(msg);
            const from  = event.getParam("from");
            const messages = component.get("v.messages");
            messages.push({
                id: messages.length,
                value:msg,
                from:from
            });
            component.set("v.messages", messages);
            alert(messages);
        }
    },
})