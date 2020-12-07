# Design Patterns In Angular

- Run `ng serve` for a dev server. Navigate to `http://localhost:4201/`
- Run `ng generate module singleton --route singleton --module app.module` to create a feature module with routing

## Creational Patterns

### Abstract Factory

- short description: create a related object family
- applicability: system is capsulated of the creation & composition of its models
- visual resource: https://refactoring.guru/design-patterns/abstract-factory
- expandability: concrete factories as singletons, factory method for creation of concrete objects, for too much objects you can use the Prototype Pattern 

##### UML

![Abstract Factory](./readme/images/01.%20Abstract%20Factory.jpg)

##### UML: example of this repo

![Abstract Factory Example](./readme/images/01.%20Abstract%20Factory%20example.jpg)

### Singleton

- short description: hold one instance globally
- visual resource: https://refactoring.guru/design-patterns/singleton

##### UML

![Singleton](./readme/images/02.%20Singleton.jpg)

##### UML: example of this repo

![Singleton Example](./readme/images/02.%20Singleton%20example.jpg)

### Prototype (Clone)

- short description: clone/copy a component 
- applicability: runtime specification of objects (dynamic loading), to many different objects for factories
- visual resource: https://refactoring.guru/design-patterns/prototype
- expandability: implementation of prototype manager (hold all prototype instances), deep-cloinig, 

##### UML

![Prototype](./readme/images/03.%20Prototype.jpg)

##### UML: example of this repo

![Prototype Example](./readme/images/03.%20Prototype%20example.jpg)

### Builder

- short description: blueprint for different products with different features
- visual resource: https://refactoring.guru/design-patterns/builder
- expandability: abstract class or interface isn't needed for "product"-objects

##### UML

![Builder](./readme/images/04.%20Builder.jpg)

##### UML: example of this repo

![Example](./readme/images/04.%20Builder%20example.jpg)

### Factory Method (Virtual Constructor)

- short description: provide an interface for creating objects in superclass
- visual resource: https://refactoring.guru/design-patterns/factory-method
- expandability: parameterized contructor for universal factory method (like abstract factory)

##### UML

![Factory Method](./readme/images/05.%20Factory%20Method.jpg)

##### UML: example of this repo

![Factory Method Example](./readme/images/05.%20Factory%20Method%20example.jpg)

## Structural Patterns

### Adapter (Wrapper)

- short description: allows objects with incompatible interfaces to collaborate
- visual resource: https://refactoring.guru/design-patterns/adapter
- expandability: 2-way-adapter for aptee and target (multiple inheritance)

##### UML

![Adapter](./readme/images/06.%20Adapter.jpg)

##### UML: example of this repo

![Adapter Example](./readme/images/06.%20Adapter%20example.jpg)

### Bridge

- short description: separate the abstraction from the implementation
- visual resource: https://refactoring.guru/design-patterns/bridge

##### UML

![Bridge](./readme/images/07.%20Bridge.jpg)

##### UML: example of this repo

![Bridge Example](./readme/images/07.%20Bridge%20example.jpg)

### Composite (Object Tree)

- short description: compose objects into tree structures
- visual resource: https://refactoring.guru/design-patterns/composite

##### UML

![Composite](./readme/images/08.%20Composite.jpg)

##### UML: example of this repo

![Composite Example](./readme/images/08.%20Composite%20example.jpg)

### Decorator (Wrapper)

- short description: attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors
- visual resource: https://refactoring.guru/design-patterns/decorator

##### UML

![Decorator](./readme/images/09.%20Decorator.jpg)

##### UML: example of this repo

![Decorator Example](./readme/images/09.%20Decorator%20example.jpg)

### Facade

- short description: provides a simplified interface to a library
- visual resource: https://refactoring.guru/design-patterns/facade

##### UML

![Facade](./readme/images/10.%20Facade.jpg)

##### UML: example of this repo

![Facade Example](./readme/images/10.%20Facade%20example.jpg)

### Flyweight (Cache)

- short description: sharing common parts of state between multiple objects instead of keeping all of the data in each object
- visual resource: https://refactoring.guru/design-patterns/flyweight

##### UML

![Flyweight](./readme/images/11.%20Flyweight.jpg)

##### UML: example of this repo

![Flyweight Example](./readme/images/11.%20Flyweight%20example.jpg)

### Proxy

- short description: controls access to the original object
- visual resource: https://refactoring.guru/design-patterns/proxy

##### UML

![Proxy](./readme/images/12.%20Proxy.jpg)

##### UML: example of this repo

![Proxy Example](./readme/images/12.%20Proxy%20example.jpg)

### Mediator

- short description: reduce chaotic dependencies between objects; only collaboration via a mediator
- visual resource: https://refactoring.guru/design-patterns/mediator

##### UML

![Mediator](./readme/images/13.%20Mediator.jpg)

##### UML: example of this repo

![Mediator Example](./readme/images/13.%20Mediator%20example.jpg)

### Iterator

- short description: traverse elements of a collection without exposing its underlying representation
- visual resource: https://refactoring.guru/design-patterns/iterator

##### UML

![Iterator](./readme/images/14.%20Iterator.jpg)

##### UML: example of this repo

![Iterator Example](./readme/images/14.%20Iterator%20example.jpg)

### Memento

- short description: save and restore the previous state of an object without revealing the details of its implementation
- visual resource: https://refactoring.guru/design-patterns/memento

##### UML

![Memento](./readme/images/15.%20Memento.jpg)

##### UML: example of this repo

![Memento Example](./readme/images/15.%20Memento%20example.jpg)

### Strategy

- short description: define a family of algorithms, put each of them into a separate class, and make their objects interchangeable
- visual resource: https://refactoring.guru/design-patterns/strategy

##### UML

![Strategy](./readme/images/16.%20Strategy.jpg)

##### UML: example of this repo

![Strategy Example](./readme/images/16.%20Strategy%20example.jpg)

### Command

- short description: turns a request into a stand-alone object that contains all information about the request
- visual resource: https://refactoring.guru/design-patterns/command

##### UML

![Command](./readme/images/17.%20Command.jpg)

##### UML: example of this repo

![Command Example](./readme/images/17.%20Command%20example.jpg)

## Resources

- Design Patterns by GoF
- https://refactoring.guru/
- https://www.geeksforgeeks.org/

