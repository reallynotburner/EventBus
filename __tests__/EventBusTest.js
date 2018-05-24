var EventBus = require('../Eventbus.js');

describe('EventBus', function eventBusTest() {
    describe('is testable', function isTestable() {
        it('exists', function exists() {
            expect(EventBus).toBeDefined();
        });  
        it('is a function', function isFunction() {
            expect(typeof EventBus).toBe('function');
        });
        it('returs correct type', function correctType() {
            expect(typeof EventBus()).toBe('object');
        })
    });
        
    describe('complete method set', function hasAllMethods() {
        var bus = EventBus();
        it('has attach', function hasAttach() {
            expect(typeof bus.attach).toBe('function');
        });
        it('has detach', function hasDetach() {
            expect(typeof bus.detach).toBe('function');
        });
        it('has detachAll', function hasDetachAll() {
            expect(typeof bus.detachAll).toBe('function');
        });
        it('has emit', function hasEmit() {
            expect(typeof bus.emit).toBe('function');
        }); 
    });
});