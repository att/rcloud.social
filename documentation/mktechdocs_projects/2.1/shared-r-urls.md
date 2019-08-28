`shared.R` URLs
===============

Files can be served from user R libraries via `shared.R/<user>/<package>`. Users can develop packages that use `shared.R` in their own development library until it is ready to be released.

Note that users are still responsible for setting the permissions on the library path -- default permissions deny access, including to the web server, to user libraries.

