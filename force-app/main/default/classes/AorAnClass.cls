public with sharing class AorAnClass {
    public String aOrAn(String word) {
        // Set<String> vowels = new Set<String>{'a', 'e', 'i', 'o', 'u'};
        // String firstChar = word.substring(0, 1);
        // return vowels.contains(firstChar) ? 'an ' + word : 'a ' + word;
        List<String> vowels = new List<String>{'a', 'e', 'i', 'o', 'u'};
        String firstChar = word.substring(0, 1);
        String dummy = 'a ';
        for(String str : vowels) {
            if (str == firstChar) {
                dummy = 'an ';
                break;
            } else {
                continue;
            }
        }
        return dummy + word;
    }
}