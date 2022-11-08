public with sharing class carSearchResultController {
@AuraEnabled(cacheable=true)
public static List<Car__c> getCars(String carTypeId){
    try {
        if(String.isEmpty(carTypeId)){
            return [SELECT id,name,Picture__c, Contact__r.Name,Geolocation__Latitude__s, Geolocation__Longitude__s FROM 
            Car__c WHERE Available_For_Rent__c = true];
        }else {
            return [SELECT id,name,Picture__c, Contact__r.Name,Geolocation__Latitude__s, Geolocation__Longitude__s FROM 
            Car__c WHERE Available_For_Rent__c = true AND 
            Car_Type__c =: carTypeId];
        }
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}