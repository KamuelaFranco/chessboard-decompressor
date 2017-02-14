const unpackChessboardString = require('./lib');

describe('unpackChessboardString', () => {
  it('should successfully unpack a valid string', () => {
    const expected =
    `r.bk...r
p..pBpNp
n....n..
.p.NP..P
......P.
...P....
P.P.K...
q.....b.`;
    const actual = unpackChessboardString('r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1');
    expect(actual).toEqual(expected);
  });

  it('should reject a non-string input', () => {
    const expected = 'Expected argument to be a string';
    const actual = () => unpackChessboardString(10000);
    expect(actual).toThrowError(expected);
  });

  it('should fail to unpack an invalid number of rows', () => {
    const expected = 'Invalid number of rows';
    const actual = () => unpackChessboardString('3w4/7p/7p/7p/8/8/8');
    expect(actual).toThrowError(expected);
  });

  it('should fail to unpack an invalid number of squares on any row', () => {
    const expected = 'Invalid number of squares';
    const actual = () => unpackChessboardString('3b4/7p/7p/6p/8/8/8/8');
    expect(actual).toThrowError(expected);
  });

  it('should fail to unpack with an invalid character', () => {
    const expected = 'Invalid encoded position : Unexpected character';
    const actual = () => unpackChessboardString('4x3/8/8/8/8/8/8/8');
    expect(actual).toThrow(expected);
  });
});
