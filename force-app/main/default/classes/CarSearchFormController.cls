public with sharing class CarSearchFormController {
    @AuraEnabled(Cacheable=true)
    public static List<Car_Type__c> getCarTypes(){
         return [SELECT Id,Name FROM Car_Type__c];
    }
}