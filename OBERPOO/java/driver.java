class Driver extends Account {  
    public Driver(String name, String document, String email, String password) {  
        super(name, document, email, password);  
    }  

    void printDataDriver() {  
        System.out.println("Document driver: " + document);  
        System.out.println("Driver name: " + name);  
        System.out.println("E-mail: " + email);  
        System.out.println("Password: " + password);  
    }  
}