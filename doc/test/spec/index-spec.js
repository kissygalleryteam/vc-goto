KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('vc-goto', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/goto/1.0.0/']});