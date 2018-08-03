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


/**
 * 객체를 안정하게 가져오게 할 수 있도록 처리 할 수 있다.
 */

