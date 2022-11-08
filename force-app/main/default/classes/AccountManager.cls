public with sharing class AccountManager {
   
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfRecords){
        try {
            return [SELECT Id,Name,Industry,Website,Phone FROM Account LIMIT :numberOfRecords ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}