# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## All changes for v2.0.3-Alpha.3 - 2017-04-26
### Dependencies
* Correct relative path for inned dependencies (ie: bourbon).

### Body
* Add background color.

### Buttons
* Box shadow in `:focus` state.
* Green contrast for main color.

### Value
* Text align in small variant.
* Agregar vertical-align a la nota. 
* Apply display block to `.value-item. 

### Image container
* Remove outline when container class is used in anchors. 

### Labels
* Decrease height so it can be used in texts.
* Convert measures to ems.

## All changes for v2.0.0-Alpha.2
* v2.0.0: Adds components: price, image-container, labels and tags.

## All changes for v1
### Core
* v1.4.3: Documentation improvements.
* v1.4.2: Minor fix in project info.
* v1.4: Migrated project to webpack and reacts.js. Adds styles and documentation for new button component.
* v1.3.2: New icon trash added.
* v1.3.1: New icons added.
* v1.3: Open Sans Typography is now part of GarbaUi. If you're still including it in a separate request, time to remove it.
* v1.2.3: New icons added.
* v1.2.2: Releases tags in repo.
Next version does not ensure backwards compatibility so please add the version in your package.json `"garba-ui": "git+https://github.com/garbarino-com/garba-ui.git#v1.2.2"`
* v1.1.25: Bugfixing in checkbox item (form component).
* v1.1.24: New icons added. rem.scss mixin fixed.
* v1.1.23: Checkbox elements created in form component.
* v1.1.22: New icon added. Bugfixing in form component.
* v1.1.21: New icon added.
* v1.1.20: New icon added.
* v1.1.19: New icon added. New blue color variable, and old one modified. Spinner component created. Buttons component updated.
* v1.1.18: New icons added, and updated some old ones. Modified responsive breakpoint "huge" from 1280px min-width, to 1366px. Optional class for body gray background color. Optional class for .gb-wrapper to set the min-width in 768.
* v1.1.17: New icons added.
* v1.1.16: New icon added, new variable color for compumundo.
* v1.1.14: Added JS libraries.
* v1.1.13: Fix in mixin popover and revert change of :visited link color.
* v1.1.12: Icons font files included in the project again.
* v1.1.11: Hotfix: Icon font files source modified. Using font source from s3.
* v1.1.10: Updated forms component with error messages.
* v1.1.9: Bugfix in tabs module.
* v1.1.8: Modification in :visited link color.
* v1.1.7: Added red action button. Removed soldout and inactive (previously commented out).
* v1.1.6: New tasks for icon fonts.
* v1.1.5: Icons font files included in the project.
* v1.1.4: New icons added to the font. Removed duplicated clearfix component.
* v1.1.3: Removed font mixin to deliver font face. Still there, but now with the proper url.
* v1.1.2: Included font mixin to deliver font face.
* v1.1.1: Including clearfix helper class.
* v1.1.0: GarbaUI is a module now. It doesnt download dependencies anymore.
