function createProcessor() {
    let state = '';
    
    function append(string)  {
        state += string;
    }
    
    function removeStart(n) {
        state = state.slice(n);
    }
    
    function removeEnd(n)  {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}
