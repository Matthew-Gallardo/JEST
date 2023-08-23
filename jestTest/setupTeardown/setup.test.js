let animals = ['dog', 'cat', 'horse', 'elephant'];

describe('animals array', () => {
    beforeEach(() => {
        console.log("BEFORE");
        animals = ['dog', 'cat', 'horse', 'elephant'];
      })
    
    
      afterEach(() => {
        console.log("AFTER");
        animals = ['dog', 'cat', 'horse', 'elephant'];
      });


    it('should add in array', () => {
      animals.push('dinosaur');
      expect(animals[animals.length-1]).toBe('dinosaur');
    
      })

      it('should add in beginning of array', () => {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
      
        })
    
        it('length should be 4', () => {
          expect(animals.length).toBe(4);
          
            })
    
})

describe('something', () => { 
    it.only('blahblah', () => {
      expect(true).toBeTruthy();
        
          })


 })

