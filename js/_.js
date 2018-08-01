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

function _each(list, iter) {
    for(let i=0; i < list.length ;i++) {
      iter(list[i]);
    }
    return list;
}

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
function _get(obj, key){
    return obj == null ? undefined : obj[key];
}
