//usage is isHugePrime(str)
// tests if the given string represents a prime number
//
// example:  isHugePrime("38383883838838383838383736476374637432")
// returns:   false

function isHugePrime(inp_x) {
    var x = BigInt(inp_x);
    var square_nums = [9n, 25n, 49n, 77n, 1n, 35n, 55n];
    var prime_nums = [3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n, 41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n];
    var y = BigInt(x % 78n);
    if (prime_nums.includes(x)) {
        return true
    }
    if ((prime_nums.includes(y)) || (y == BigInt(1)) || (square_nums.includes(y))) {
        if ((x % 5n) !== 0n) {
            if ((x % 3n) !== 0n) {
                if ((x % 7n) !== 0n) {
                    if ((x % 11n) !== 0n) {
                        if ((y !== 1n) && ((x % y) !== 0n)) {
                            var q = x;
                            while ((q - 78n) >= 0n) {
                                q -= 78n
                            }
                            if ((2n > q) && (q > 0n)) {
                                return true
                            }
                            q = x;
                            for (var t = 0; t < prime_nums.length; t++) {
                                var r = prime_nums[t];
                                if ((q % r) === 0n) {
                                    return false
                                }
                            }
                            return true
                        }
                        if (y === 1n) {
                            var q = x;
                            for (var t = 0; t < prime_nums.length; t++) {
                                var r = prime_nums[t];
                                if ((q % r) === 0n) {
                                    return false
                                }
                            }
                            return true
                        }
                    }
                }
            }
        }
    }
    return false
}

