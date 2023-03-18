// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is when encoding", () => {
     const actual = polybiusModule.polybius("my name is"); 
     const expected = "2345 33112351 4234";
    expect(actual).to.eql(expected);
  });

it("should ignore capital letters", () => {
     const actual = polybiusModule.polybius("hElLo"); 
     const expected = "3251131343";
    expect(actual).to.eql(expected);
  });
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybiusModule.polybius('23513434112251', false);
    const expected = "message";
        expect(actual).to.equal(expected);
  });
  it("should leave the spaces as is when decoding", () => {
     const actual = polybiusModule.polybius("2345 33112351 4234", false); 
     const expected = "my name (i/j)s";
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("4432423352125413", false); 
     const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("jiggle"); 
     const expected = "424222221351";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybiusModule.polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});