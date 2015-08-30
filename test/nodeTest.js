var test = require('blue-tape');
var extender = require('../src/JSONExtender');

test('simple add propery', function(t){
  var org = {
    foo: true
  };
  var ext = {
    var: 10.1
  };
  var expect = {
    foo: true,
    var: 10.1
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});

test('simple delete propery', function(t){
  var org = {
    foo: true,
    var: 10.1
  };
  var ext = {
    foo: extender.deleteCode
  };
  var expect = {
    var: 10.1
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});

test('simple modify propery', function(t){
  var org = {
    foo: true,
    var: 10.1
  };
  var ext = {
    foo: false
  };
  var expect = {
    foo: false,
    var: 10.1
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});

test('nested add propery', function(t){
  var org = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gaga: 'Hello'
      }
    }
  };
  var ext = {
    var: {
      gogo: {
        gogo: 'Bye'
      }
    }
  };
  var expect = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gaga: 'Hello',
        gogo: 'Bye'
      }
    }
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});

test('nested delete propery', function(t){
  var org = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gaga: 'Hello',
        gogo: 'Bye'
      }
    }
  };
  var ext = {
    var: {
      gogo: {
        gaga: extender.deleteCode
      }
    }
  };
  var expect = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gogo: 'Bye'
      }
    }
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});

test('nested modify propery', function(t){
  var org = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gaga: 'Hello',
        gogo: 'Bye'
      }
    }
  };
  var ext = {
    var: {
      gogo: {
        gaga: 'hello 2'
      }
    }
  };
  var expect = {
    foo: true,
    var: {
      dada: true,
      gogo: {
        gaga: 'hello 2',
        gogo: 'Bye'
      }
    }
  };

  t.plan(1);
  t.deepEqual(extender.extend(org, ext), expect, "the objects are equal.");

});
