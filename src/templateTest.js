const assert = require("assert");
const template = require("./template");

describe('test', function ()
{
  const cases = [
    {
      input: `{{chapter}}`,
      output: 'chapter 01',
    },
    {
      input: `{{heading}}`,
      output: 'heading 0102',
    },
    {
      input: `{{subheading}}`,
      output: 'subheading 0102.03',
    },
    {
      input: `{{hscode}}`,
      output: 'subheading 0102.03.0405',
    },
    {
      input: `{{xyz}}`,
      output: 'abc',
    }
  ];

  cases.forEach(case_ =>
  {
    it(`${case_.input} with vars`, function ()
    {
      const processed = template(case_.input, {hscode: '0102030405', 'xyz': 'abc'});
      assert.equal(processed, case_.output)
    });
    
    it(`${case_.input} without vars`, function ()
    {
      const processed = template(case_.input, {});
      assert.equal(processed, case_.input)
    });
  });
});
