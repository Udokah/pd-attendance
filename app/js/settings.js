"use strict";
var appServices = angular.module('pdAttendance.services', []);

appServices.factory('settings', ['$firebaseArray', '$firebaseObject', 
  function($firebaseArray, $firebaseObject){
    var rootRef = new Firebase('https://pd-attendance-dev.firebaseio.com/');
    return {
      root: rootRef,
      admin: rootRef.child('admin'),
      attendance: rootRef.child('attendance'),
      attendance_codes: rootRef.child('attendance_codes'),
      fellows: rootRef.child('fellows'),
      group_leaders: rootRef.child('group_leaders'),
      test_leaders: rootRef.child('test_leaders')
    };

}]);