public class Colors {
    @AuraEnabled
    public static String[] getNewColors() {
            return new String[]{'red', 'blue', 'green'};
    }
}