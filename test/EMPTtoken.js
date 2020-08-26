const { isMainThread } = require("worker_threads");
const assert = require('assert');

const EMPTtoken = artifacts.require('EMPTtoken');

contract("EMPTtoken", accounts => {
    it("should put 2880000000 EMPTtoken in the first account", () => 
        EMPTtoken.deployed()
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

    it( "has a name 'EMPTtoken' ", () => 
        EMPTtoken.deployed()
        .then( instance => {
                return instance.name.call();
            }
        )
        .then(name => {
            assert.equal(name,"EMPTtoken","name is not EMPTtoken");
        })
    );

    it( "has a symbol 'empt' ", () => 
        EMPTtoken.deployed()
        .then( instance => {
                return instance.symbol.call();
            }
        )
        .then(symbol => {
            assert.equal(symbol,"empt","symbol is not empt");
        })
    );

    it( "decimals is 18 ", () => 
        EMPTtoken.deployed()
        .then( instance => {
                return instance.decimals.call();
            }
        )
        .then(decimals => {
            assert.equal(decimals,18,"decimals is not 18");
        })
    );
})