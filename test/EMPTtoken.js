const { isMainThread } = require("worker_threads");
const assert = require('assert');

const GLEXtoken = artifacts.require('GLEXtoken');

contract("GLEXtoken", accounts => {
    it("should put 2880000000 GLEXtoken in the first account", () => 
        GLEXtoken.deployed()
        .then( instance => {
                return instance.balanceOf.call(accounts[0]);
            }
        )
        .then(balance => {
            assert.equal(
                balance.valueOf(),
                2880000000 * (10 ** 18),
                "2880000000 wasn't in the first account"
            )
        })
    );

    it( "has a name 'GLEXtoken' ", () => 
        GLEXtoken.deployed()
        .then( instance => {
                return instance.name.call();
            }
        )
        .then(name => {
            assert.equal(name,"GLEXtoken","name is not GLEXtoken");
        })
    );

    it( "has a symbol 'glex' ", () => 
        GLEXtoken.deployed()
        .then( instance => {
                return instance.symbol.call();
            }
        )
        .then(symbol => {
            assert.equal(symbol,"glex","symbol is not glex");
        })
    );

    it( "decimals is 18 ", () => 
        GLEXtoken.deployed()
        .then( instance => {
                return instance.decimals.call();
            }
        )
        .then(decimals => {
            assert.equal(decimals,18,"decimals is not 18");
        })
    );
})