var $ = require('jquery');

module.exports = {
    setTodos: function(todos){
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    }, 
    getTodos: function(){
            var todosContent = localStorage.getItem('todos');
            var todos = [];
            try {
                todos = JSON.parse(todosContent);
            } catch (e) {
                
            }
            
            if ($.isArray(todos)) {
                return todos;
            }
        return [];
    },
    filterTodos: function(todos, showCompleted, searchText){

        var filteredTodos = todos;
        console.log(filteredTodos);
        //Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.isCompleted || showCompleted;
        });
        //Filter by SearchText
        filteredTodos = filteredTodos.filter( (todo) => {
            if (searchText.length > 0) {
                return todo.todo.indexOf(searchText.toLowerCase()) > -1;    
            }
            return true;
            
        });

        //Sort todos with non-completed first
        filteredTodos.sort( (a, b) =>{
            if (!a.isCompleted && b.isCompleted) {
                return -1;
            }else if(a.isCompleted && !b.isCompleted){
                return 1;
            }else{
                return 0;
            }
        } );

        return filteredTodos;
    }
};