var $ = require('node').all;
var Base = require('base');

var VcGoto = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');

    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        start:{
            value:0
        }
    }
});

module.exports = VcGoto;



