
const sum = require('./sum');


describe("Describe Testing", ()=>{

it('sum', () => {
  expect(sum(1, 2)).toBe(3);
})

it('object assignment', () => {
    const obj= {};
    expect(obj).toEqual({});

  })
 
}) 

test('num matching', () => {
    const value = 10.1 + 4.4;
    expect(value).toBeGreaterThan(10);
    expect(value).toBeGreaterThanOrEqual(14);
    expect(value).toBeLessThan(20);
    expect(value).toBeLessThanOrEqual(15);
    expect(value).toBeCloseTo(14.496);
});


 
test('string match', () => {
    const value = ['Lebron james']; // Add the equal sign (=) for assignment
    expect(value[0]).toMatch('ron ja'); // Access the first element using [0]
});

test('string not', () => {
    expect('Christoph').not.toMatch(/topher/);
  });

  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];
  
  test('contain array', () => {
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK!');
  }
  
  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use a string that must be contained in the error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  
    // Or you can match an exact error message using a regexp like below
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
    expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
  });
