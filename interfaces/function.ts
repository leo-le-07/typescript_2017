// EX 1
// Function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

// EX 2
// We also ommit function parameters because function value is assigned
// directly to a variable of type SearchFun

// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source, subString) {
//     let result = source.search(subString);
//     return result > -1;
// }