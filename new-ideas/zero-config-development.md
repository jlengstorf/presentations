# Pragmatic Zero-Config Development: A Real-World Adventure in Removing the Burden of Boilerplate on a Large Team

Keeping development and build tools in sync is a big task — we need to install and configure ESLint, Babel, Travis, Jest, Webpack, and many other tools on nearly every project. And if that config changes? Hours disappear in a hurry.

What happens when _dozens_ of apps in a microservice architecture need common config files? Can they be kept in sync, or is it hopeless?

Simple apps can forget about config thanks to `create-react-app`, but what about complex apps? Can we create zero-config development toolboxes that work at scale? That can be shared between projects? That can be extended?

This talk follows the experiments Jason Lengstorf and his team built to try and solve the configuration problem at IBM. Learn about the challenges large teams face in keeping their stack in sync, what smart people we borrowed ideas from, and how we tweaked things to work in an enterprise environment — and how you can use these strategies in your own projects.
