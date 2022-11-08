public with sharing class AccountController{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        return [SELECT Id, Name, Phone FROM ACCOUNT ORDER BY CreatedDate desc Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccList(String keyword){
        String key = '%'+keyword+'%';
        return [SELECT Id, Name, Phone FROM ACCOUNT WHERE Name LIKE:key];
    }
}