public with sharing class AscendingOrderClass {
    public Boolean ascendingOrder(Integer a, Integer b, Integer c) {
        //Remember to create a test class to test this
        List<Integer> inputs = new List<Integer>{a, b, c};
        Integer min = a;
        Integer max = b;
        if (min <= max) {
            min = max;
            Boolean flag = true;
            for (Integer i = 2; i < inputs.size(); i++) {
                max = inputs[i];
                if (min <= max) {
                    min = max;
                } else {
                    flag = false;
                    break;
                }
            }
            return flag;
        } else {
            return false;
        }
    }
}