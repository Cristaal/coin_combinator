describe('coinCombinator', function() {
  it("returns nothing for nothing", function() {
    expect(coinCombinator(0)).to.eql([0, 0, 0, 0, 0, 0]);
  });

  it("returns one Sacajawea coin for one dollar", function() {
    expect(coinCombinator(100)).to.eql([1, 0, 0, 0, 0, 0])
  })

  it("returns two half-dollars for one dollar", function() {
    expect(coinCombinator(50)).to.eql([0, 1, 0, 0, 0, 0]);
  });

  it("returns four quarters for one dollar", function() {
    expect(coinCombinator(25)).to.eql([0, 0, 1, 0, 0, 0]);
  });

  it("returns two dimes for twenty cents", function() {
    expect(coinCombinator(20)).to.eql([0, 0, 0, 2, 0, 0]);
  });

  it("returns one nickel for five cents", function() {
    expect(coinCombinator(5)).to.eql([0, 0, 0, 0, 1, 0]);
  });

  it("returns four pennies for four cents", function() {
    expect(coinCombinator(4)).to.eql([0, 0, 0, 0, 0, 4]);
  });

  it("returns least change for amount over a dollar", function() {
    expect(coinCombinator(236)).to.eql([2, 0, 1, 1, 0, 1]);
  });

});
