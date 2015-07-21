var test = require('unit.js');

describe('static-vars', function () {

  'use strict';

  var staticVars;

  beforeEach(function () {

    staticVars = require('../lib');

  });

  afterEach(function () {

    delete require.cache[require.resolve('../lib')];

  });

  describe('static-vars[cleared-tests]', function () {

    afterEach(function () {

      delete global._staticVars;

    });

    describe('get()', function () {

      it('shouldReturnNullIfUndefinedAndNoDefault', function () {

        test.value(
          staticVars.get('test')
        ).isUndefined();

      });

      it('shouldReturnTheDefaultValueIfUndefined', function () {

        test.bool(
          staticVars.get('test', true)
        ).isTrue();

        test.value(
          global._staticVars.test
        ).isUndefined();

      });

      it('shouldReturnTheStoredValueIfDefined', function () {

        global._staticVars.test = true;

        test.bool(
          staticVars.get('test')
        ).isTrue();

      });

    });

    describe('set()', function () {

      it('shouldSetTheGlobalValue', function () {

        test.value(
          global._staticVars.test
        ).isUndefined();

        staticVars.set('test', true);

        test.bool(
          global._staticVars.test
        ).isTrue();

      });

      it('shouldUpdateTheDefinedValue', function () {

        global._staticVars.test = false;

        staticVars.set('test', true);

        test.bool(
          global._staticVars.test
        ).isTrue();

      });

    });

    describe('has()', function () {

      it('shouldReturnFalseIfUndefined', function () {

        test.bool(
          staticVars.has('test')
        ).isNotTrue();

      });

      it('shouldReturnTrueIfDefined', function () {

        global._staticVars.test = true;

        test.bool(
          staticVars.has('test')
        ).isTrue();

      });

    });

    describe('del()', function () {

      it('shouldDeleteTheDefinedValue', function () {

        global._staticVars.test = true;

        staticVars.del('test');

        test.value(
          global._staticVars.test
        ).isUndefined();

      });

    });

  });

  describe('static-vars[uncleared-tests]', function () {

    it('initializeTheGlobalPriorToCleaningCache', function () {

      test.value(
        staticVars.get('test')
      ).isUndefined();

      test.bool(
        staticVars.has('test')
      ).isNotTrue();

      staticVars.set('test', true);
      test.bool(
        staticVars.get('test')
      ).isTrue();

      test.bool(
        staticVars.has('test')
      ).isTrue();

    });

    it('staticShouldStillBeDefined', function () {

      test.bool(
        staticVars.has('test')
      ).isTrue();

      test.bool(
        staticVars.get('test')
      ).isTrue();

    });

    it('staticVariableShouldBeDeleted', function () {

      staticVars.del('test');
      test.bool(
        staticVars.has('test')
      ).isNotTrue();

    });

    it('staticShouldNotBeDefined', function () {

      test.bool(
        staticVars.has('test')
      ).isFalse();

    });

  });

});
