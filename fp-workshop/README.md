# reveal.js + Pug

A framework for easily creating beautiful presentations using HTML. [Check out the live demo](http://jlengstorf.github.io/reveal.js-jade/). (Compare it to the [reveal.js demo](http://lab.hakim.se/reveal-js/))

[Reveal.js](https://github.com/hakimel/reveal.js) was built by [Hakim El Hattab](https://github.com/hakimel/).

Later,[Jason Lengstorf](https://lengstorf.com/) — because he's too lazy to write out HTML longhand —  ported markup authoring to [Pug](https://pugjs.org).

## Documentation
This project is identical to the original [reveal.js](https://github.com/hakimel/reveal.js) in every way except authoring markup.

### Using Pug

See [Pug's documentation](https://pugjs.org).

### Using Reveal.js

See the [reveal.js documentation](https://github.com/hakimel/reveal.js).

## Working with Reveal.js + Pug

**To edit your slideshow markup, edit `templates/index.pug`.** While you *can* edit `index.html` and nothing will break, any changes made to that file will be overridden when changes are made to a Pug file.


### Quick Start

To get up and running with Reveal.js + Pug, clone the repo and install dependencies:

```console
git clone git@github.com:jlengstorf/reveal.js-jade.git
cd reveal.js-jade
npm install
```

Next, start up the development server:

```console
grunt serve
```

Open `http://0.0.0.0:8000/` in your browser to see the [demo presentation](http://jlengstorf.github.io/reveal.js-jade/).


### Creating Your Own Presentation

To create your own slideshow, edit `templates/index.pug`.

**NOTE:** Editing Pug templates is hooked up to the `watch` task in Grunt, and your changes will be automatically recompiled whenever you save. If you have the [livereload extension](http://livereload.com/extensions/) installed, changes will appear automatically as you save.

Inside `templates/index.pug`, you are only required to add one line of code:

```pug
extends layouts/presentation
```

This presentation won't have any of your info in it, but it will display a presentation once saved.


### Adding Slides

To add slides, override the default `slides` block in the layout:

```pug
extends layouts/presentation

block slides
	//- Use the `slide` mixin for quick slide creation
	+slide
		h1 Slide Title
		p Slide text here.

	//- Use standard Pug to create slides as well
	section
		h1 Slide Title
		p Slide text here.
```

The `slide` mixin is most handy if you're using Markdown. See the next section for details.


### Using Markdown

To author slides in Markdown:

```pug
extends layouts/presentation

block slides
	//- Use the `slide` mixin for quick slide creation
	+slide(data-markdown=true)
		# Slide Title

		Slide text goes here.

		```
		var foo = 'bar';
		```

	//- Use standard Pug to create slides as well
	section
		script(type="text/template")
			# Slide Title

			Slide text goes here.

			```
			var foo = 'bar';
			```
```

This works because the `slide` mixin checks for `data-markdown` and auto-wraps the slide content with `script(type="text/template")` when found.

### Slides with Attributes

Adding attributes works as expected, whether you're using the `slide` mixin or not:

```pug
extends layouts/presentation

block slides
	//- Use the `slide` mixin for quick slide creation
	+slide(data-markdown=true, data-background="#EEEEEE")
		# Slide Title

		Slide text goes here.

	//- Use standard Pug to create slides as well
	section(data-background="#000000" data-transition="slide")
		h1 Slide Title
		p Slide text here.
```

### Adding Custom Title and Meta

The `title` block is designed to allow easy updating of the `tite`, as well as the `description` and `author` meta tags.

```pug
extends layouts/presentation

block title
	title My Sweet Presentation
	meta(name="description" content="Description of my sweet presentation")
	meta(name="author" content="Your Name Here")

block slides
	//- ...slides go here...
```

### Change the Presentation Theme

To change the presentation theme, override the default in the `theme` block:

```pug
extends layouts/presentation

block theme
	link(rel="stylesheet" href="css/theme/simple.css" id="theme")

block slides
	//- ...slides go here...
```

### Adding Custom Stylesheets

If you need to add additional stylesheets (such as an icon set or hosted fonts), use the `styles` block:

```pug
extends layouts/presentation

block styles
	//- Font Awesome for icons
	link(
		rel="stylesheet"
		href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
	)

block slides
	//- ...slides go here...
```

### Overriding Default Scripts

The default scripts loaded are `lib/js/head.min.js` and `js/reveal.js`. Additionally, `Reveal.initialize()` is called with the defaults specified in the demo. To override these settings, simply override using the `defaultscripts` block:

```pug
extends layouts/presentation

block slides
	//- ...slides go here...

block defaultscripts
	script(src="lib/js/head.min.js")
	script(src="js/reveal.js")
	script.
		// Full list of configuration options available at:
		// https://github.com/hakimel/reveal.js#configuration
		Reveal.initialize({
			controls: false,
			progress: false,
			history: true,
			center: true,
			transition: 'zoom', // none/fade/slide/convex/concave/zoom
			// Optional reveal.js plugins
			dependencies: [
				{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
				{ src: 'plugin/notes/notes.js', async: true }
			]
		});
```

### Adding Custom Scripts

If you want to add additional scripts (and don't want to set them as Reveal.js dependencies), you can use the `scripts` block:

```pug
extends layouts/presentation

block slides
	//- ...slides go here...

block scripts
	script(src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js")
```


### Adding Presentation Extras

For additional HTML that's not related to Reveal.js, you can add it using the `extras` block. For example, you may want to add a footer to your presenations that persists across all slides:

```pug
extends layouts/presentation

block slides
	//- ...slides go here...

block extras
	footer
		ul.inline
			li.
				&ldquo;Even Better Presentation with Reveal.js + Pug&rdquo;
				by #[a(href='http://lengstorf.com') Jason Lengstorf]
			li
				a(href="https://twitter.com/jlengstorf").
					@jlengstorf
			li
				a(href="https://github.com/jlengstorf").
					github.com/jlengstorf
```

## License

MIT licensed

Copyright (C) 2016 Hakim El Hattab, http://hakim.se
