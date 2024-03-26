public with sharing class ContactController {
    public static List<Contact> getContacts() {

        return [
            SELECT FirstName, LastName, Email 
            FROM Contact
            WITH SECURITY_ENFORCED
       ];

    }
}