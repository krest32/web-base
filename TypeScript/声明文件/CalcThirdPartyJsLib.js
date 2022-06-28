var Runoob;
(function(Runoob) {
    var Calc = function() {
        function Calc() {}
    };
    // 计算一个累加的和
    Calc.prototype.doSum = function(limit) {
        var sum = 0;
        for (var i = 0; i <= limit; i++) {
            sum = sum + i;
        }
        return sum;
    };
    Runoob.Calc = Calc;
    return Calc;
})(Runoob || (Runoob = {}));
var test = new Runoob.Calc();