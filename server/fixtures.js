// load fixture data if the db is empty
// XXX: is there some way to tell if you are in development?
//  - ideally we'd have some kind of script runner to load this
Meteor.startup(function() {
  if (GroundControlConfig.loadFixtures && Posts.find().count() === 0) {
    var title;
    
    Posts.insert({
      title: title = 'Meteor 0.5.0: authentication, user accounts, new screencast',
      slug: titleToSlug(title),
      color: 0,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 9, 19),
        body: "For the past six months we've been hard at work on an authentication and\nuser accounts system for Meteor. Today is the day that it all comes\ntogether. Meteor 0.5.0, available today, allows you to write secure\nrealtime client-server applications in pure JavaScript. It's the only\nsystem of its kind in the world.\n\nWe're also releasing [a new screencast](/authcast)\nthat shows off what it's like to develop with these powerful new\ntools. If you liked the first Meteor screencast you should definitely\ncheck this one out. We hope you'll share it with your friends and\ncoworkers too.\n\nWe are thankful for the immense amount of support that we received in putting\ntogether this release &mdash; from those of you on\n[meteor-core](http://groups.google.com/group/meteor-core) and\n[meteor-talk](http://groups.google.com/group/meteor-talk), from those of you who\nare already using Meteor in commercial environments or making money from Meteor\nconsulting, from everyone who sent pull requests, from those of you that have\nbeen giving awesome conference talks and religiously answering questions on\nStack Overflow and Quora. Without this support there would be no Meteor. In\nfact, 0.5.0 contains more community patches than every previous Meteor release\ncombined.\n\nToday's release includes everything necessary to build and deploy\nsecure applications using Meteor:\n\n * New authentication APIs on the server: a\n   [`Meteor.allow`](http://docs.meteor.com/#allow) API that controls which data\n   a Meteor client is allowed to change in the database, and hooks that give the\n   Meteor server control over what data it sends to each client.  These core\n   APIs operate at the wire protocol layer, so they establish a strong\n   foundation for security.\n\n * [Meteor Accounts](http://docs.meteor.com/#accounts_api), a state-of-the-art\n   user account system built on top of the core Meteor authentication APIs.\n   Accounts provides a set of high-level APIs to manage user accounts, which are\n   stored in the [`Meteor.users`](http://docs.meteor.com/#meteor_users)\n   collection.\n\n * Support for the [Secure Remote Password\n   protocol](http://en.wikipedia.org/wiki/Secure_Remote_Password_protocol).\n   Developed at Stanford, SRP lets a user securely log in to a server without\n   ever sending that server their unencrypted password.  The kind of\n   high-profile security breaches at LinkedIn and Pandora earlier this year are\n   impossible with SRP.  Instead of asking every application developer to safely\n   store passwords, we've baked the very best technology right into Meteor\n   Accounts.\n\n * Smart packages for major OAuth login services, including Google,\n   Facebook, Twitter, GitHub, and Weibo.  Packages for additional\n   providers are also available on Atmosphere, a repository for\n   community packages.\n\n * [Accounts UI](http://docs.meteor.com/#accountsui), a set of login, signup,\n   and password reset forms that drop right into an application with one line of\n   code.  Accounts UI also provides configuration wizards for each of the OAuth\n   login packages.\n\nAll the parts of Meteor work together.  Subscriptions automatically\nrerun when the current user changes, so it's very easy to publish more\ndocuments or extra document fields to authenticated users.  The UI\nwidgets automatically reconfigure themselves as you add new login\nservices.  Password-based accounts include a password recovery link, and\nif you deploy to our servers with `meteor deploy` there's absolutely no\nconfiguration required to send the reset email.  The\n[screencast](/authcast) demonstrates each of these,\nso we hope you'll take a moment to watch.\n\n"
    });
    
    
    Posts.insert({
      title: title = 'Meteor 0.4.2: iOS 6 compatibility!',
      slug: titleToSlug(title),
      color: 5,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 9, 2),
      body: "We're happy to announce Meteor 0.4.2, which restores functionality on iOS 6\ndevices by working around a major caching bug in mobile Safari. We encourage you\nto upgrade at your earliest convenience.  The same fix is also checked in to the\npre-release [`auth`](https://github.com/meteor/meteor/tree/auth) branch.\n\nTo update your installation, just run `$ meteor update`.  If you haven't tried\nMeteor yet and you're on Linux or a Mac, you can get started with\n`$ curl https://install.meteor.com | sh` inside a terminal window.\n\nThe iOS 6 bug wasn't limited to Meteor applications: Apple's new release broke\nmany web applications that use XHR long-polling to hold open a connection to a\nserver.  Meteor uses the popular [SockJS](http://sockjs.org/) library to manage\nlong-polling.  Special thanks to [Marek Majkowski](http://github.com/majek) who\nquickly built a new SockJS release with our patch that fixes the problem.\n\nWe've also added a smart package in 0.4.2 called `preserve-inputs`, now added to\nnew projects by default, which preserves most form elements automatically when\nMeteor redraws the screen.  This reinstates the default behavior prior to Meteor\n0.4.0, which added fine-grained input element preservation API.  To gain tighter\ncontrol of input preservation, just run `$ meteor remove preserve-inputs` and use\nthe [Spark API](http://docs.meteor.com/#template_preserve).\n\nWe've also upgraded the [Node.js](http://nodejs.org/) server-side Javascript\nengine from 0.8.8 to the latest stable version, 0.8.11. See\n[History.md](http://github.com/meteor/meteor/blob/master/History.md) for full\ndetails on the changes in this release.\n"
    });
    
    Posts.insert({
      title: title = 'Meteor 0.4.1: Sending email and Node 0.8',
      slug: titleToSlug(title),
      color: 4,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 8, 24),
      body: [
        "We are hard at work polishing up Meteor Accounts, our full-featured auth system that supports login with Facebook and Google, or with secure passwords. Many Meteor developers are already using it on our pre-release [`auth`](https://github.com/meteor/meteor/tree/auth) branch and contributing code: we've merged pull requests for Twitter and Weibo login services, with more on the way. See the [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-Started-with-Auth) page on our wiki and the email traffic on [the meteor-core list](https://groups.google.com/forum/?fromgroups#!forum/meteor-core) if you want to get an early look.",
        "One result of that effort is Meteor 0.4.1's new [`email` smart package](http://docs.meteor.com/#email) for sending email messages, which Meteor Accounts uses to send password recovery and welcome emails. When running locally, emails prints to the console for ease of debugging. In production, `Email.send()` will work with any standard SMTP server.",
        "But there's more than just an API. We've partnered with [Rackspace's Mailgun team](http://mailgun.com) so that every app deployed with `$ meteor deploy` can send email right away, without any annoying configuration process. These automatic accounts are capped at 200 messages a day, but of course you're not tied to them. You can use any SMTP server (your own box, a paid Mailgun account, or anything else) just by setting the `$MAIL_URL` environment variables, whether you're using our deploy servers or running your own bundles.",
        "To update your installation, just run `$ meteor update`. If you haven't tried Meteor yet and you're on Linux or a Mac, you can get started with `$ curl https://install.meteor.com | sh` inside a terminal window.",
        "Meteor 0.4.1 includes some additional changes. We've upgraded [Node.js](http://nodejs.org) from [0.6 to 0.8](https://github.com/joyent/node/wiki/API-changes-between-v0.6-and-v0.8), the latest stable release line of the JavaScript engine that Meteor's server-side components run on. We've made our API more consistent with JavaScript standards by converting the last few old APIs from inch_worm spellings to camelCase (though the old names continue to work for now). And we incorporated a slew of other improvements and bug fixes from the Meteor community; see [History.md](https://github.com/meteor/meteor/blob/master/History.md) for full details."
      ].join('\n\n')      
    });
    
    Posts.insert({
      title: title = 'Introducing Spark: a new live page update engine',
      slug: titleToSlug(title),
      color: 3,
      author: 'David Greenspan',
      authorGravatarHash: '696549174910acff6ad306a38ed8c1fc',
      publishedAt: new Date(2012, 8, 0),
      body: [
        "We've just pushed Meteor 0.4.0. In this release, we're proud to introduce a major new technology: Spark, a live page update engine by David Greenspan and Geoff Schmidt. Spark replaces the old `liveui` package and works under the hood to enable several powerful new template features.",
        "You can think of Spark as a declarative version of jQuery. jQuery is imperative. To get work done in jQuery, you tell it to carry out a series of actions: 'Find these nodes. Add this class to them. Replace this thing with that.' Spark is declarative. You tell it how you want the page to look, and not only does it make the page look that way, it keeps the page updated as data changes. Spark weighs in at 8k gzipped and minified, including all of its dependencies, and it's easily separable from the rest of Meteor.",
        "Spark is intended to be a low-level building block. It's the basis for Meteor's templating support, and Meteor developers may never need to know about it. You'd use Spark from a Meteor project if you're writing your own templating system (eg, packaging a Handlebars alternative), or if you're doing something fancy and low-level.",
        "Spark enables several highly requested features in Meteor templates:",
        " - Embeds: You can now embed external widgets like Google Maps or D3 directly into a Meteor app. Reactive updates to the page will take into account regions that are managed by third-party libraries, refreshing their surrondings but leaving the region untouched. Just wrap your embedded widget with the `{{#constant}}...{{/constant}}` block helper to indicate that it shouldn't be altered by page updates. See Constant regions in the docs for more.",
        " - Template lifecycle callbacks: You can get a callback when the template has been rendered and placed on the screen (meaning it can be manipulated by other libraries like jQuery) and also when the template has been taken off the screen (so you can tear down any resources associated with it, like timers.) See the `Template.myTemplate.rendered` docs for more.",
        " - DOM preservation: Meteor has the ability to preserve DOM nodes in place while updating the surrounding HTML. This means, for example, that text input fields won't be disturbed and CSS animations will run without interruption. You now have explicit control over which nodes are preserved using the `preserve` directive on templates.",
        " - Find-by-selector: It's now easy to find DOM nodes by selector within a template. Event handlers take a second argument, 'template', which provides `template.find(selector)` and `template.findAll(selector)`. In template callbacks, they are available as `this.find` and `this.findAll`."
      ].join('\n\n')
    });
    
    Posts.insert({
      title: title = 'Search engine optimization',
      slug: titleToSlug(title),
      color: 2,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 7, 8),
      body: "We are happy to announce Meteor 0.3.9 and the new **spiderable** smart\npackage, which allows Google and other search engines to index Meteor\napplications.\n\nThe spiderable package uses the AJAX Crawling Specification published by\nGoogle to serve HTML to web spiders.  When a spider requests an HTML\nsnapshot of a page, the Meteor server runs the client half of the\napplication and returns the full HTML generated by the client code.\nThis version of spiderable uses [phantomjs](http://phantomjs.org), a\nheadless browser.  A future release will eliminate the dependency on\nphantomjs and run the client code directly.\n\nYou can add spiderable to any Meteor app.  For the past month, we have\nbeen using an early version on our own website.  That &mdash; plus all your\nblogging &mdash; is why [www.meteor.com](http://www.meteor.com) is now the top search result for\n\"meteor\".\n\nTo get started, type `meteor add spiderable`.  If you deploy to our\nservers with `meteor deploy` you're all set.  If you're running your app\non your own infrastructure, you'll need to provide a copy of phantomjs.\nSee [the spiderable docs](http://docs.meteor.com/#spiderable) for more.\n"
    });
    
    Posts.insert({
      title: title = 'SSL support, Handlebars extensions',
      slug: titleToSlug(title),
      color: 1,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 6, 12),
      body: "I'm happy to announce the release of Meteor 0.3.8.  This release\nfeatures several useful extensions to the handlebars template engine.\nMeteor 0.3.8 also includes SSL support, another step toward auth.\n\nThanks to Tom Coleman and Iain Shigeoka for help with the Handlebars API\nchanges in 0.3.8, and to Trevor Burnham and Sindre Moen for their smart\npackage updates.\n\nTo update your installation, just run `meteor update`.  If you haven't\ntried Meteor yet and you're on Linux or a Mac, you can get started with\n`$ curl https://install.meteor.com | sh` inside a terminal window.\n\n### Handlebars improvements ###\n\nDavid Greenspan made some changes to Meteor's Handlebars engine that\neliminate boilerplate in common use cases:\n\n  * Meteor now understands dotted paths in Handlebars helpers.  If you\n    happen to have a `currentUser` helper function that returns a `User`\n    object (it's coming!), you can now write\n    `{{currentUser.name}}` to return the `name` property of the\n    user, or even `{{currentUser.favorites.length}}` to print\n    the number of items in the current user's `favorites` array.\n\n  * If an argument to a helper is itself a function, Meteor will call\n    that function and provide its return value.  This change makes using\n    getters from inside templates much easier.\n\n  * We've extended the syntax for passing multiple arguments to helpers,\n    so you can now write somethig like `{{#if isFriend\n    currentUser._id this._id}}`.\n\nAll these changes are documented in our [Handlebars wiki\npage](https://github.com/meteor/meteor/wiki/Handlebars).  Tom and Iain,\nthanks again for your help nailing this down.\n\n### SSL ###\n\nNick Martin added HTTPS support for both the initial page load and for\neach client's SockJS connection back to the server.  This work completes\nanother piece of the auth puzzle.\n\nIf you're using `meteor deploy` to host an app on the meteor.com domain,\nyour app is now served over both HTTP and HTTPS.  In either case,\nclients will always use SSL to connect back to the server.  To disallow\nunencrypted access entirely, add the new `force-ssl` smart package,\nwhich will redirect insecure requests over to your app's secure URL.\n\nIf you're using `meteor bundle` to run your application elsewhere,\nyou'll need to configure an SSL proxy to support encrypted clients.\n\n### Miscellaneous ###\n\nTrevor Burnham updated `stylus` to 0.28.1 and added support for Nib.\n\nSindre Moen updated `bootstrap` to 2.0.4.\n"
    });
    
    
    Posts.insert({
      title: title = 'Building out live page updates',
      slug: titleToSlug(title),
      color: 0,
      author: 'Matt DeBergalis',
      authorGravatarHash: '182ca8f6769f9e589ccfe4c15b9a130a',
      publishedAt: new Date(2012, 6, 12),
      body: "Since the first release in April, we've had a tremendous response from\nmany of you on IRC and Stack Overflow about Meteor's live page update\ntechnology.  So we've invested more time into liveui, the smart package\nthat implements those live page updates.  Meteor 0.3.7 includes three\nof the most-request improvements:\n\n * Both radio buttons and textareas now update reactively across all\n   browsers.\n\n * Meteor's HTML template scanner now prints a clear diagnostic message\n   when it encounters a problem in a template file, with the exact line\n   number where the error occurred.  (It seems that \"Error: Couldn't\n   parse .. um .. some HTML file, on some line.\" wasn't your favorite.)\n\n * HTML template files can now include comments at the top level and\n   whitespace in open/close tags.\n\n### More on live page updates ###\n\nMeteor's live page update technology lets you write dramatically less\ncode to manage HTML on the screen, using any template system you like.\n\nWith liveui, your templates automatically redraw when the data they\ndepend on changes.  All you do is write template helpers that access the\ndata the template needs, and event handlers that respond to browser\nevents.  Those helper and event handler functions have access to the\ndata object associated with their template through `this`, so your code\nis clear and concise.\n\nAnd liveui handles many of the thorny details that make hand-written DOM\nupdating code so frustrating.  When liveui redraws a form field, it\npreserves the focus, the cursor position, the partially entered text,\nand even the accented character input state.  So a user whose entering\ntext won't be interrupted, even as changes from other users are updating\nother parts of your screen.\n\nWhen live-updating DOM elements are taken off the screen, Meteor\nautomatically cleans them up: it tears down the internal callbacks that\nmanage redraws, stops any associated database queries, and then deletes\nthem.  You never have to worry about the zombie templates that plague\nhand-written update logic.\n\nTogether, all of this is why you don't have to write any onchange event\ncallbacks, special data bindings, or other boilerplate code.  It just\nworks automatically.\n\nWe're going to keep adding more to liveui: higher-level form helpers,\nvalidations, and preserving forms across hot code push are all on the\nlist.  Stay tuned.\n"
    });
  }
});