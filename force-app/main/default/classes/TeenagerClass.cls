public with sharing class TeenagerClass {
    public Boolean isTeenager(Integer age) {
        return ((12 < age ) && (age < 20)) ? true : false; // assuming age is not null
    }
}