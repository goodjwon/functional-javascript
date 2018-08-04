function _filter(list, priedi) {
    let new_list = [];
    _each(list, function(val){
        if(priedi(val)) new_list.push(val);
    });

    return new_list;
}

function _map(list, mapper){
    let new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });

    return new_list;
}

function _get(obj, key){
    return obj == null ? undefined : obj[key];
}


var _length = _curry(_get('length'));

function _each(list, iter) {

    for (var i=0, len = _length(list); i < len ; i++) {
      iter(list[i]);
    }

    return list;
}


var _map = _curryr(_map), 
    _filter = _curryr(_filter);

function _curry(fn){
    return function(a,b){
        return arguments.length == 2 ? fn(a, b) : function(b){ return fn(a, b);
        }
    }
};

function _curryr(fn){
    return function(a,b){
        return arguments.length == 2 ? fn(a, b) : function(b){ return fn(b, a);
        }
    }
}


var _get = _curryr(function(obj, key){
    return obj == null ? undefined : obj[key];
})


var slice = Array.prototype.slice;

function _rest(list, num) {
    return slice.call(list, num || 1);

}

function _reduce(list, iter, memo) {

    if(arguments.length == 2 ){
        memo = list[0];
        list = _rest(list);
    }
    _each(list, function (val) {
        memo = iter(memo, val)
    });

    return memo;
}

/**
 * 연속적인 함수의 실행
 **/
function _pipe(){
    var fns = arguments;
    return function(arg){
        return _reduce(fns, function(arg, fn){
            return fn(arg);
        }, arg)
    }
}

/**
 * 연속적인 함수 바로 실행.
 */
function _go(arg){
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}

function _isObject(obj) {
    return typeof obj == 'object' && !!obj;

}

function _keys(obj) {
    return _isObject(obj) ? Object.keys(obj) : [];

}