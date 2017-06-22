

var expect = require('expect');
var reducers = require('./reducers');
var df = require('deep-freeze-strict');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'work'
            };

            var res = reducers.searchTextReducer( df(''), df(action));
            expect(res).toEqual(action.searchText);
        });
    });

    describe('toggleShowCompleted', () =>{
        it('should toggle show completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };

            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);
        });
    });

    describe('todoRecuder', () => {
        it('should add a new todo', () => {
             var action = {
                type: 'ADD_TODO',
                text: 'go for shopping'
            };

            var res = reducers.todoRecuder(df([]), df(action));
            expect(res.length).toBeGreaterThan(0);
            expect(res[0].todo).toEqual(action.text);
        });

         it('should toggle todo', () => {

            var action = {
                type: 'ADD_TODO',
                text: 'go for shopping'
            };

            var res = reducers.todoRecuder(df([]), df(action));
            expect(res.length).toBeGreaterThan(0);

             var toggleAction = {
                type: 'TOGGLE_TODO',
                id: res[0].id
            };
            console.log(toggleAction);
            var res1 = reducers.todoRecuder(df(res), df(toggleAction));
            console.log(res1);
            expect(res1[0].isCompleted).toEqual(true);
        });
    });

    
});