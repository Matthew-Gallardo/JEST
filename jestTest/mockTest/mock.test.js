const axios = require("axios");

const forEach= (items, callback) => {
    for(let i=0; i< items.length; i++){
        callback(items[i]);
    }

}
const fetchData = async (id) => {
    try {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        console.log(result);
        return result.data; // Return the data from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Rethrow the error for handling higher up the call stack
    }
};


it('mock call back', () => {
    mockCallback = jest.fn(x=> 42+x);

    forEach([0,1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  
    })

    it('mock return', () => {
        const mock =jest.fn();
        mock.mockReturnValueOnce(true);
        const result =mock();
        expect(result).toBe(true);

        
          })

    it('mock axios', async () => {
       jest.spyOn(axios,"get").mockReturnValueOnce(
       { data:{

        id:1,
        todo: "matapos",
        }}
       );
       const result = await fetchData(1);
       expect(result.todo).toBe("matapos");

            
              })
      
  

