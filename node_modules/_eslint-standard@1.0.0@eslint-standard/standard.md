[Rules](https://standardjs.com/rules-en.html#rules)
---------------------------------------------------

-   **Use 2 spaces** for indentation.

    eslint: [`indent`](http://eslint.org/docs/rules/indent)

    function hello (name) {

      console.log('hi', name)

    }

-   **Use single quotes for strings** except to avoid escaping.

    eslint: [`quotes`](http://eslint.org/docs/rules/quotes)

    console.log('hello there')

    $("<div class='box'>")

-   **No unused variables.**

    eslint: [`no-unused-vars`](http://eslint.org/docs/rules/no-unused-vars)

    function myFunction () {

      var result = something()   // ✗ avoid 

    }

-   **Add a space after keywords.**

    eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing)

    if (condition) { ... }   // ✓ ok 

    if(condition) { ... }    // ✗ avoid 

-   **Add a space before a function declaration's parentheses.**

    eslint: [`space-before-function-paren`](http://eslint.org/docs/rules/space-before-function-paren)

    function name (arg) { ... }   // ✓ ok 

    function name(arg) { ... }    // ✗ avoid 

    run(function () { ... })      // ✓ ok 

    run(function() { ... })       // ✗ avoid 

-   **Always use** `===` instead of `==`.\
    Exception: `obj == null` is allowed to check for `null || undefined`.

    eslint: [`eqeqeq`](http://eslint.org/docs/rules/eqeqeq)

    if (name === 'John')   // ✓ ok 

    if (name == 'John')    // ✗ avoid 

    if (name !== 'John')   // ✓ ok 

    if (name != 'John')    // ✗ avoid 

-   **Infix operators** must be spaced.

    eslint: [`space-infix-ops`](http://eslint.org/docs/rules/space-infix-ops)

    // ✓ ok 

    var x = 2

    var message = 'hello, ' + name + '!'

    // ✗ avoid 

    var x=2

    var message = 'hello, '+name+'!'

-   **Commas should have a space** after them.

    eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

    // ✓ ok 

    var list = [1, 2, 3, 4]

    function greet (name, options) { ... }

    // ✗ avoid 

    var list = [1,2,3,4]

    function greet (name,options) { ... }

-   **Keep else statements** on the same line as their curly braces.

    eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

    // ✓ ok 

    if (condition) {

      // ... 

    } else {

      // ... 

    }

    // ✗ avoid 

    if (condition) {

      // ... 

    }

    else {

      // ... 

    }

-   **For multi-line if statements,** use curly braces.

    eslint: [`curly`](http://eslint.org/docs/rules/curly)

    // ✓ ok 

    if (options.quiet !== true) console.log('done')

    // ✓ ok 

    if (options.quiet !== true) {

      console.log('done')

    }

    // ✗ avoid 

    if (options.quiet !== true)

      console.log('done')

-   **Always handle the** `err` function parameter.

    eslint: [`handle-callback-err`](http://eslint.org/docs/rules/handle-callback-err)

    // ✓ ok 

    run(function (err) {

      if (err) throw err

      window.alert('done')

    })

    // ✗ avoid 

    run(function (err) {

      window.alert('done')

    })

-   **Always prefix browser globals** with `window.`.\
    Exceptions are: `document`, `console` and `navigator`.

    eslint: [`no-undef`](http://eslint.org/docs/rules/no-undef)

    window.alert('hi')   // ✓ ok 

-   **Multiple blank lines not allowed.**

    eslint: [`no-multiple-empty-lines`](http://eslint.org/docs/rules/no-multiple-empty-lines)

    // ✓ ok 

    var value = 'hello world'

    console.log(value)

    // ✗ avoid 

    var value = 'hello world'

    console.log(value)

-   **For the ternary operator** in a multi-line setting, place `?` and `:` on their own lines.

    eslint: [`operator-linebreak`](http://eslint.org/docs/rules/operator-linebreak)

    // ✓ ok 

    var location = env.development ? 'localhost' : 'www.api.com'

    // ✓ ok 

    var location = env.development

      ? 'localhost'

      : 'www.api.com'

    // ✗ avoid 

    var location = env.development ?

      'localhost' :

      'www.api.com'

-   **For var declarations,** write each declaration in its own statement.

    eslint: [`one-var`](http://eslint.org/docs/rules/one-var)

    // ✓ ok 

    var silent = true

    var verbose = true

    // ✗ avoid 

    var silent = true, verbose = true

    // ✗ avoid 

    var silent = true,

        verbose = true

-   **Wrap conditional assignments** with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).

    eslint: [`no-cond-assign`](http://eslint.org/docs/rules/no-cond-assign)

    // ✓ ok 

    while ((m = text.match(expr))) {

      // ... 

    }

    // ✗ avoid 

    while (m = text.match(expr)) {

      // ... 

    }

-   **Add spaces inside single line blocks.**

    eslint: [`block-spacing`](http://eslint.org/docs/rules/block-spacing)

      function foo () {return true}    // ✗ avoid 

      function foo () { return true }  // ✓ ok 

-   **Use camelcase when naming variables and functions.**

    eslint: [`camelcase`](http://eslint.org/docs/rules/camelcase)

      function my_function () { }    // ✗ avoid 

      function myFunction () { }     // ✓ ok 

      var my_var = 'hello'           // ✗ avoid 

      var myVar = 'hello'            // ✓ ok 

-   **Trailing commas not allowed.**

    eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

      var obj = {

        message: 'hello',   // ✗ avoid 

      }

-   **Commas must be placed at the end of the current line.**

    eslint: [`comma-style`](http://eslint.org/docs/rules/comma-style)

      var obj = {

        foo: 'foo'

        ,bar: 'bar'   // ✗ avoid 

      }

      var obj = {

        foo: 'foo',

        bar: 'bar'   // ✓ ok 

      }

-   **Dot should be on the same line as property.**

    eslint: [`dot-location`](http://eslint.org/docs/rules/dot-location)

      console.

        log('hello')  // ✗ avoid 

      console

        .log('hello') // ✓ ok 

-   **Files must end with a newline.**

    eslint: [`eol-last`](http://eslint.org/docs/rules/eol-last)

-   **No space between function identifiers and their invocations.**

    eslint: [`func-call-spacing`](http://eslint.org/docs/rules/func-call-spacing)

    console.log ('hello') // ✗ avoid 

    console.log('hello')  // ✓ ok 

-   **Add space between colon and value in key value pairs.**

    eslint: [`key-spacing`](http://eslint.org/docs/rules/key-spacing)

    var obj = { 'key' : 'value' }    // ✗ avoid 

    var obj = { 'key' :'value' }     // ✗ avoid 

    var obj = { 'key':'value' }      // ✗ avoid 

    var obj = { 'key': 'value' }     // ✓ ok 

-   **Constructor names must begin with a capital letter.**

    eslint: [`new-cap`](http://eslint.org/docs/rules/new-cap)

    function animal () {}

    var dog = new animal()    // ✗ avoid 

    function Animal () {}

    var dog = new Animal()    // ✓ ok 

-   **Constructor with no arguments must be invoked with parentheses.**

    eslint: [`new-parens`](http://eslint.org/docs/rules/new-parens)

    function Animal () {}

    var dog = new Animal    // ✗ avoid 

    var dog = new Animal()  // ✓ ok 

-   **Objects must contain a getter when a setter is defined.**

    eslint: [`accessor-pairs`](http://eslint.org/docs/rules/accessor-pairs)

    var person = {

      set name (value) {    // ✗ avoid 

        this.name = value

      }

    }

    var person = {

      set name (value) {

        this.name = value

      },

      get name () {         // ✓ ok 

        return this.name

      }

    }

-   **Constructors of derived classes must call `super`.**

    eslint: [`constructor-super`](http://eslint.org/docs/rules/constructor-super)

    class Dog {

      constructor () {

        super()   // ✗ avoid 

      }

    }

    class Dog extends Mammal {

      constructor () {

        super()   // ✓ ok 

      }

    }

-   **Use array literals instead of array constructors.**

    eslint: [`no-array-constructor`](http://eslint.org/docs/rules/no-array-constructor)

    var nums = new Array(1, 2, 3)   // ✗ avoid 

    var nums = [1, 2, 3]            // ✓ ok 

-   **Avoid using `arguments.callee` and `arguments.caller`.**

    eslint: [`no-caller`](http://eslint.org/docs/rules/no-caller)

    function foo (n) {

      if (n <= 0) return

      arguments.callee(n - 1)   // ✗ avoid 

    }

    function foo (n) {

      if (n <= 0) return

      foo(n - 1)

    }

-   **Avoid modifying variables of class declarations.**

    eslint: [`no-class-assign`](http://eslint.org/docs/rules/no-class-assign)

    class Dog {}

    Dog = 'Fido'    // ✗ avoid 

-   **Avoid modifying variables declared using `const`.**

    eslint: [`no-const-assign`](http://eslint.org/docs/rules/no-const-assign)

    const score = 100

    score = 125       // ✗ avoid 

-   **Avoid using constant expressions in conditions (except loops).**

    eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

    if (false) {    // ✗ avoid 

      // ... 

    }

    if (x === 0) {  // ✓ ok 

      // ... 

    }

    while (true) {  // ✓ ok 

      // ... 

    }

-   **No control characters in regular expressions.**

    eslint: [`no-control-regex`](http://eslint.org/docs/rules/no-control-regex)

    var pattern = /\x1f/    // ✗ avoid 

    var pattern = /\x20/    // ✓ ok 

-   **No `debugger` statements.**

    eslint: [`no-debugger`](http://eslint.org/docs/rules/no-debugger)

    function sum (a, b) {

      debugger      // ✗ avoid 

      return a + b

    }

-   **No `delete` operator on variables.**

    eslint: [`no-delete-var`](http://eslint.org/docs/rules/no-delete-var)

    var name

    delete name     // ✗ avoid 

-   **No duplicate arguments in function definitions.**

    eslint: [`no-dupe-args`](http://eslint.org/docs/rules/no-dupe-args)

    function sum (a, b, a) {  // ✗ avoid 

      // ... 

    }

    function sum (a, b, c) {  // ✓ ok 

      // ... 

    }

-   **No duplicate name in class members.**

    eslint: [`no-dupe-class-members`](http://eslint.org/docs/rules/no-dupe-class-members)

    class Dog {

      bark () {}

      bark () {}    // ✗ avoid 

    }

-   **No duplicate keys in object literals.**

    eslint: [`no-dupe-keys`](http://eslint.org/docs/rules/no-dupe-keys)

    var user = {

      name: 'Jane Doe',

      name: 'John Doe'    // ✗ avoid 

    }

-   **No duplicate `case` labels in `switch` statements.**

    eslint: [`no-duplicate-case`](http://eslint.org/docs/rules/no-duplicate-case)

    switch (id) {

      case 1:

        // ... 

      case 1:     // ✗ avoid 

    }

-   **Use a single import statement per module.**

    eslint: [`no-duplicate-imports`](http://eslint.org/docs/rules/no-duplicate-imports)

    import { myFunc1 } from 'module'

    import { myFunc2 } from 'module'          // ✗ avoid 

    import { myFunc1, myFunc2 } from 'module' // ✓ ok 

-   **No empty character classes in regular expressions.**

    eslint: [`no-empty-character-class`](http://eslint.org/docs/rules/no-empty-character-class)

    const myRegex = /^abc[]/      // ✗ avoid 

    const myRegex = /^abc[a-z]/   // ✓ ok 

-   **No empty destructuring patterns.**

    eslint: [`no-empty-pattern`](http://eslint.org/docs/rules/no-empty-pattern)

    const { a: {} } = foo         // ✗ avoid 

    const { a: { b } } = foo      // ✓ ok 

-   **No using `eval()`.**

    eslint: [`no-eval`](http://eslint.org/docs/rules/no-eval)

    eval( "var result = user." + propName ) // ✗ avoid 

    var result = user[propName]             // ✓ ok 

-   **No reassigning exceptions in `catch` clauses.**

    eslint: [`no-ex-assign`](http://eslint.org/docs/rules/no-ex-assign)

    try {

      // ... 

    } catch (e) {

      e = 'new value'             // ✗ avoid 

    }

    try {

      // ... 

    } catch (e) {

      const newVal = 'new value'  // ✓ ok 

    }

-   **No extending native objects.**

    eslint: [`no-extend-native`](http://eslint.org/docs/rules/no-extend-native)

    Object.prototype.age = 21     // ✗ avoid 

-   **Avoid unnecessary function binding.**

    eslint: [`no-extra-bind`](http://eslint.org/docs/rules/no-extra-bind)

    const name = function () {

      getName()

    }.bind(user)    // ✗ avoid 

    const name = function () {

      this.getName()

    }.bind(user)    // ✓ ok 

-   **Avoid unnecessary boolean casts.**

    eslint: [`no-extra-boolean-cast`](http://eslint.org/docs/rules/no-extra-boolean-cast)

    const result = true

    if (!!result) {   // ✗ avoid 

      // ... 

    }

    const result = true

    if (result) {     // ✓ ok 

      // ... 

    }

-   **No unnecessary parentheses around function expressions.**

    eslint: [`no-extra-parens`](http://eslint.org/docs/rules/no-extra-parens)

    const myFunc = (function () { })   // ✗ avoid 

    const myFunc = function () { }     // ✓ ok 

-   **Use `break` to prevent fallthrough in `switch` cases.**

    eslint: [`no-fallthrough`](http://eslint.org/docs/rules/no-fallthrough)

    switch (filter) {

      case 1:

        doSomething()    // ✗ avoid 

      case 2:

        doSomethingElse()

    }

    switch (filter) {

      case 1:

        doSomething()

        break           // ✓ ok 

      case 2:

        doSomethingElse()

    }

    switch (filter) {

      case 1:

        doSomething()

        // fallthrough  // ✓ ok 

      case 2:

        doSomethingElse()

    }

-   **No floating decimals.**

    eslint: [`no-floating-decimal`](http://eslint.org/docs/rules/no-floating-decimal)

    const discount = .5      // ✗ avoid 

    const discount = 0.5     // ✓ ok 

-   **Avoid reassigning function declarations.**

    eslint: [`no-func-assign`](http://eslint.org/docs/rules/no-func-assign)

    function myFunc () { }

    myFunc = myOtherFunc    // ✗ avoid 

-   **No reassigning read-only global variables.**

    eslint: [`no-global-assign`](http://eslint.org/docs/rules/no-global-assign)

    window = {}     // ✗ avoid 

-   **No implied `eval()`.**

    eslint: [`no-implied-eval`](http://eslint.org/docs/rules/no-implied-eval)

    setTimeout("alert('Hello world')")                   // ✗ avoid 

    setTimeout(function () { alert('Hello world') })     // ✓ ok 

-   **No function declarations in nested blocks.**

    eslint: [`no-inner-declarations`](http://eslint.org/docs/rules/no-inner-declarations)

    if (authenticated) {

      function setAuthUser () {}    // ✗ avoid 

    }

-   **No invalid regular expression strings in `RegExp` constructors.**

    eslint: [`no-invalid-regexp`](http://eslint.org/docs/rules/no-invalid-regexp)

    RegExp('[a-z')    // ✗ avoid 

    RegExp('[a-z]')   // ✓ ok 

-   **No irregular whitespace.**

    eslint: [`no-irregular-whitespace`](http://eslint.org/docs/rules/no-irregular-whitespace)

    function myFunc () /*<NBSP>*/{}   // ✗ avoid 

-   **No using `__iterator__`.**

    eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

    Foo.prototype.__iterator__ = function () {}   // ✗ avoid 

-   **No labels that share a name with an in scope variable.**

    eslint: [`no-label-var`](http://eslint.org/docs/rules/no-label-var)

    var score = 100

    function game () {

      score: 50         // ✗ avoid 

    }

-   **No label statements.**

    eslint: [`no-labels`](http://eslint.org/docs/rules/no-labels)

    label:

      while (true) {

        break label     // ✗ avoid 

      }

-   **No unnecessary nested blocks.**

    eslint: [`no-lone-blocks`](http://eslint.org/docs/rules/no-lone-blocks)

    function myFunc () {

      {                   // ✗ avoid 

        myOtherFunc()

      }

    }

    function myFunc () {

      myOtherFunc()       // ✓ ok 

    }

-   **Avoid mixing spaces and tabs for indentation.**

    eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

-   **Do not use multiple spaces except for indentation.**

    eslint: [`no-multi-spaces`](http://eslint.org/docs/rules/no-multi-spaces)

    const id =    1234    // ✗ avoid 

    const id = 1234       // ✓ ok 

-   **No multiline strings.**

    eslint: [`no-multi-str`](http://eslint.org/docs/rules/no-multi-str)

    const message = 'Hello

                     world'     // ✗ avoid 

-   **No `new` without assigning object to a variable.**

    eslint: [`no-new`](http://eslint.org/docs/rules/no-new)

    new Character()                     // ✗ avoid 

    const character = new Character()   // ✓ ok 

-   **No using the `Function` constructor.**

    eslint: [`no-new-func`](http://eslint.org/docs/rules/no-new-func)

    var sum = new Function('a', 'b', 'return a + b')    // ✗ avoid 

-   **No using the `Object` constructor.**

    eslint: [`no-new-object`](http://eslint.org/docs/rules/no-new-object)

    let config = new Object()   // ✗ avoid 

-   **No using `new require`.**

    eslint: [`no-new-require`](http://eslint.org/docs/rules/no-new-require)

    const myModule = new require('my-module')    // ✗ avoid 

-   **No using the `Symbol` constructor.**

    eslint: [`no-new-symbol`](http://eslint.org/docs/rules/no-new-symbol)

    const foo = new Symbol('foo')   // ✗ avoid 

-   **No using primitive wrapper instances.**

    eslint: [`no-new-wrappers`](http://eslint.org/docs/rules/no-new-wrappers)

    const message = new String('hello')   // ✗ avoid 

-   **No calling global object properties as functions.**

    eslint: [`no-obj-calls`](http://eslint.org/docs/rules/no-obj-calls)

    const math = Math()   // ✗ avoid 

-   **No octal literals.**

    eslint: [`no-octal`](http://eslint.org/docs/rules/no-octal)

    const num = 042     // ✗ avoid 

    const num = '042'   // ✓ ok 

-   **No octal escape sequences in string literals.**

    eslint: [`no-octal-escape`](http://eslint.org/docs/rules/no-octal-escape)

    const copyright = 'Copyright \251'  // ✗ avoid 

-   **Avoid string concatenation when using `__dirname` and `__filename`.**

    eslint: [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat)

    const pathToFile = __dirname + '/app.js'            // ✗ avoid 

    const pathToFile = path.join(__dirname, 'app.js')   // ✓ ok 

-   **Avoid using `__proto__`.** Use `getPrototypeOf` instead.

    eslint: [`no-proto`](http://eslint.org/docs/rules/no-proto)

    const foo = obj.__proto__               // ✗ avoid 

    const foo = Object.getPrototypeOf(obj)  // ✓ ok 

-   **No redeclaring variables.**

    eslint: [`no-redeclare`](http://eslint.org/docs/rules/no-redeclare)

    let name = 'John'

    let name = 'Jane'     // ✗ avoid 

    let name = 'John'

    name = 'Jane'         // ✓ ok 

-   **Avoid multiple spaces in regular expression literals.**

    eslint: [`no-regex-spaces`](http://eslint.org/docs/rules/no-regex-spaces)

    const regexp = /test   value/   // ✗ avoid 

    const regexp = /test {3}value/  // ✓ ok 

    const regexp = /test value/     // ✓ ok 

-   **Assignments in return statements must be surrounded by parentheses.**

    eslint: [`no-return-assign`](http://eslint.org/docs/rules/no-return-assign)

    function sum (a, b) {

      return result = a + b     // ✗ avoid 

    }

    function sum (a, b) {

      return (result = a + b)   // ✓ ok 

    }

-   **Avoid assigning a variable to itself**

    eslint: [`no-self-assign`](http://eslint.org/docs/rules/no-self-assign)

    name = name   // ✗ avoid 

-   **Avoid comparing a variable to itself.**

    eslint: [`no-self-compare`](http://eslint.org/docs/rules/no-self-compare)

    if (score === score) {}   // ✗ avoid 

-   **Avoid using the comma operator.**

    eslint: [`no-sequences`](http://eslint.org/docs/rules/no-sequences)

    if (doSomething(), !!test) {}   // ✗ avoid 

-   **Restricted names should not be shadowed.**

    eslint: [`no-shadow-restricted-names`](http://eslint.org/docs/rules/no-shadow-restricted-names)

    let undefined = 'value'     // ✗ avoid 

-   **Sparse arrays are not allowed.**

    eslint: [`no-sparse-arrays`](http://eslint.org/docs/rules/no-sparse-arrays)

    let fruits = ['apple',, 'orange']       // ✗ avoid 

-   **Tabs should not be used**

    eslint: [`no-tabs`](http://eslint.org/docs/rules/no-tabs)

-   **Regular strings must not contain template literal placeholders.**

    eslint: [`no-template-curly-in-string`](http://eslint.org/docs/rules/no-template-curly-in-string)

    const message = 'Hello ${name}'   // ✗ avoid 

    const message = `Hello ${name}`   // ✓ ok 

-   **`super()` must be called before using `this`.**

    eslint: [`no-this-before-super`](http://eslint.org/docs/rules/no-this-before-super)

    class Dog extends Animal {

      constructor () {

        this.legs = 4     // ✗ avoid 

        super()

      }

    }

-   **Only `throw` an `Error` object.**

    eslint: [`no-throw-literal`](http://eslint.org/docs/rules/no-throw-literal)

    throw 'error'               // ✗ avoid 

    throw new Error('error')    // ✓ ok 

-   **Whitespace not allowed at end of line.**

    eslint: [`no-trailing-spaces`](http://eslint.org/docs/rules/no-trailing-spaces)

-   **Initializing to `undefined` is not allowed.**

    eslint: [`no-undef-init`](http://eslint.org/docs/rules/no-undef-init)

    let name = undefined    // ✗ avoid 

    let name

    name = 'value'          // ✓ ok 

-   **No unmodified conditions of loops.**

    eslint: [`no-unmodified-loop-condition`](http://eslint.org/docs/rules/no-unmodified-loop-condition)

    for (let i = 0; i < items.length; j++) {...}    // ✗ avoid 

    for (let i = 0; i < items.length; i++) {...}    // ✓ ok 

-   **No ternary operators when simpler alternatives exist.**

    eslint: [`no-unneeded-ternary`](http://eslint.org/docs/rules/no-unneeded-ternary)

    let score = val ? val : 0     // ✗ avoid 

    let score = val || 0          // ✓ ok 

-   **No unreachable code after `return`, `throw`, `continue`, and `break` statements.**

    eslint: [`no-unreachable`](http://eslint.org/docs/rules/no-unreachable)

    function doSomething () {

      return true

      console.log('never called')     // ✗ avoid 

    }

-   **No flow control statements in `finally` blocks.**

    eslint: [`no-unsafe-finally`](http://eslint.org/docs/rules/no-unsafe-finally)

    try {

      // ... 

    } catch (e) {

      // ... 

    } finally {

      return 42     // ✗ avoid 

    }

-   **The left operand of relational operators must not be negated.**

    eslint: [`no-unsafe-negation`](http://eslint.org/docs/rules/no-unsafe-negation)

    if (!key in obj) {}       // ✗ avoid 

    if (!(key in obj)) {}     // ✓ ok 

-   **Avoid unnecessary use of `.call()` and `.apply()`.**

    eslint: [`no-useless-call`](http://eslint.org/docs/rules/no-useless-call)

    sum.call(null, 1, 2, 3)   // ✗ avoid 

-   **Avoid using unnecessary computed property keys on objects.**

    eslint: [`no-useless-computed-key`](http://eslint.org/docs/rules/no-useless-computed-key)

    const user = { ['name']: 'John Doe' }   // ✗ avoid 

    const user = { name: 'John Doe' }       // ✓ ok 

-   **No unnecessary constructor.**

    eslint: [`no-useless-constructor`](http://eslint.org/docs/rules/no-useless-constructor)

    class Car {

      constructor () {      // ✗ avoid 

      }

    }

-   **No unnecessary use of escape.**

    eslint: [`no-useless-escape`](http://eslint.org/docs/rules/no-useless-escape)

    let message = 'Hell\o'  // ✗ avoid 

-   **Renaming import, export, and destructured assignments to the same name is not allowed.**

    eslint: [`no-useless-rename`](http://eslint.org/docs/rules/no-useless-rename)

    import { config as config } from './config'     // ✗ avoid 

    import { config } from './config'               // ✓ ok 

-   **No whitespace before properties.**

    eslint: [`no-whitespace-before-property`](http://eslint.org/docs/rules/no-whitespace-before-property)

    user .name      // ✗ avoid 

    user.name       // ✓ ok 

-   **No using `with` statements.**

    eslint: [`no-with`](http://eslint.org/docs/rules/no-with)

    with (val) {...}    // ✗ avoid 

-   **Maintain consistency of newlines between object properties.**

    eslint: [`object-property-newline`](http://eslint.org/docs/rules/object-property-newline)

    const user = {

      name: 'Jane Doe', age: 30,

      username: 'jdoe86'            // ✗ avoid 

    }

    const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' }    // ✓ ok 

    const user = {

      name: 'Jane Doe',

      age: 30,

      username: 'jdoe86'

    }                                                                 // ✓ ok 

-   **No padding within blocks.**

    eslint: [`padded-blocks`](http://eslint.org/docs/rules/padded-blocks)

    if (user) {

                                // ✗ avoid 

      const name = getName()

    }

    if (user) {

      const name = getName()    // ✓ ok 

    }

-   **No whitespace between spread operators and their expressions.**

    eslint: [`rest-spread-spacing`](http://eslint.org/docs/rules/rest-spread-spacing)

    fn(... args)    // ✗ avoid 

    fn(...args)     // ✓ ok 

-   **Semicolons must have a space after and no space before.**

    eslint: [`semi-spacing`](http://eslint.org/docs/rules/semi-spacing)

    for (let i = 0 ;i < items.length ;i++) {...}    // ✗ avoid 

    for (let i = 0; i < items.length; i++) {...}    // ✓ ok 

-   **Must have a space before blocks.**

    eslint: [`space-before-blocks`](http://eslint.org/docs/rules/space-before-blocks)

    if (admin){...}     // ✗ avoid 

    if (admin) {...}    // ✓ ok 

-   **No spaces inside parentheses.**

    eslint: [`space-in-parens`](http://eslint.org/docs/rules/space-in-parens)

    getName( name )     // ✗ avoid 

    getName(name)       // ✓ ok 

-   **Unary operators must have a space after.**

    eslint: [`space-unary-ops`](http://eslint.org/docs/rules/space-unary-ops)

    typeof!admin        // ✗ avoid 

    typeof !admin        // ✓ ok 

-   **Use spaces inside comments.**

    eslint: [`spaced-comment`](http://eslint.org/docs/rules/spaced-comment)

    //comment           // ✗ avoid 

    // comment          // ✓ ok 

    /*comment*/         // ✗ avoid 

    /* comment */       // ✓ ok 

-   **No spacing in template strings.**

    eslint: [`template-curly-spacing`](http://eslint.org/docs/rules/template-curly-spacing)

    const message = `Hello, ${ name }`    // ✗ avoid 

    const message = `Hello, ${name}`      // ✓ ok 

-   **Use `isNaN()` when checking for `NaN`.**

    eslint: [`use-isnan`](http://eslint.org/docs/rules/use-isnan)

    if (price === NaN) { }      // ✗ avoid 

    if (isNaN(price)) { }       // ✓ ok 

-   **`typeof` must be compared to a valid string.**

    eslint: [`valid-typeof`](http://eslint.org/docs/rules/valid-typeof)

    typeof name === 'undefimed'     // ✗ avoid 

    typeof name === 'undefined'     // ✓ ok 

-   **Immediately Invoked Function Expressions (IIFEs) must be wrapped.**

    eslint: [`wrap-iife`](http://eslint.org/docs/rules/wrap-iife)

    const getName = function () { }()     // ✗ avoid 

    const getName = (function () { }())   // ✓ ok 

    const getName = (function () { })()   // ✓ ok 

-   **The `*` in `yield*`expressions must have a space before and after.**

    eslint: [`yield-star-spacing`](http://eslint.org/docs/rules/yield-star-spacing)

    yield* increment()    // ✗ avoid 

    yield * increment()   // ✓ ok 

-   **Avoid Yoda conditions.**

    eslint: [`yoda`](http://eslint.org/docs/rules/yoda)

    if (42 === age) { }    // ✗ avoid 

    if (age === 42) { }    // ✓ ok 

[Semicolons](https://standardjs.com/rules-en.html#semicolons)
-------------------------------------------------------------

-   No semicolons. (see: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/~inimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

    eslint: [`semi`](http://eslint.org/docs/rules/semi)

    window.alert('hi')   // ✓ ok 

    window.alert('hi');  // ✗ avoid 

-   Never start a line with `(`, `[`, or ```. This is the only gotcha with omitting semicolons, and standard protects you from this potential issue.

    eslint: [`no-unexpected-multiline`](http://eslint.org/docs/rules/no-unexpected-multiline)

    // ✓ ok 

    ;(function () {

      window.alert('ok')

    }())

    // ✗ avoid 

    (function () {

      window.alert('ok')

    }())

    // ✓ ok 

    ;[1, 2, 3].forEach(bar)

    // ✗ avoid 

    [1, 2, 3].forEach(bar)

    // ✓ ok 

    ;`hello`.indexOf('o')

    // ✗ avoid 

    `hello`.indexOf('o')

    Note: If you're often writing code like this, you may be trying to be too clever.

    Clever short-hands are discouraged, in favor of clear and readable expressions, whenever possible.

    Instead of this:

    ;[1, 2, 3].forEach(bar)

    This is strongly preferred:

    var nums = [1, 2, 3]

    nums.forEach(bar)