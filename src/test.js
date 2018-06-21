import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'donejs-amplify/models/test';

F.attach(QUnit);

QUnit.module('donejs-amplify functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('donejs-amplify main page shows up', function() {
  F('title').text('donejs-amplify', 'Title is set');
});
