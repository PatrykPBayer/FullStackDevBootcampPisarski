//Wzorce projektowe - gotowe rozwiązania na istniejące problemy

//Obserwator/Observer

function Click(){
    this.handlers = []
}

Click.prototype = {

    subscribe: function (fn){
        this.handlers.push(fn)
    },

    unsubscribe: function(fn){
        this.handlers = this.handlers.filter(
            function (item){
                if (item !== fn){
                    return item
                }
            }
        )
    },

    fire: function (o, thisObj){
        var scope = thisObj || window
        this.handlers.forEach(function(item){
            item.call(scope, o)
        })
    }
}

function run(){
    var clickHandler = function(item){
        console.log("Fired: " + item)
    }

    var click = new Click()

    click.subscribe(clickHandler)
    click.fire("Event #1")
    click.unsubscribe(clickHandler)
    click.fire("Event #2")
    click.subscribe(clickHandler)
    click.fire("Event #3")
}

window.onclick = function(){
    run()
}