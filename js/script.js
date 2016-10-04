" use strict ";
<<<<<<< HEAD

function PhoneBook(){

};

function listAllNames() {
  // code to list all names
};

function listAllNumbers() {
  // code to list all numbers
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
};

function showRemove() {
  var remove = prompt("Enter name to remove");
};

function showLookup() {
  var lookup = prompt("Enter number to lookup");
};

var display = document.getElementById("display");
=======
var display = document.getElementById("display");
function PhoneBook() {
    this.entries = new Array();
    this.listAllNames = function () {
        this.entries.forEach(function (entry) {
            display.innerHTML += entry.name;
        });
    };
    this.listAllEntries = function () {
        this.entries.forEach(function (entry) {
            display.innerHTML += entry;
        });
    };
    this.showAdd = function () {
        var name = prompt("Enter full name");
        var number = prompt("Enter phone number");
        this.entries.push({ name: name, number: number });
    };
    this.showRemove = function () {
        var remove = prompt("Enter name to remove");
        var index = this.entries.indexOf(remove);
        this.entries.splice(index, 1);
    };
}
;
function showRemove() {
    var remove = prompt("Enter name to remove");
}
;
function showLookup() {
    var lookup = prompt("Enter number to lookup");
}
;
>>>>>>> 7e5d991d53f576ed681cdf06e8778538646be006
