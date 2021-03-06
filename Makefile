# deploy script taken from https://github.com/nicoespeon/nicoespeon.github.io
# script builds the jekyll site on the develop branch, checkout master and
# puts the static file into master, goes back to develop at the end

TO_DELETE_BEFORE = js/ css/
TO_DELETE = _config.yml _includes _layouts Gemfile.lock Makefile _data _plugins Gemfile css/*.scss _sass yarn.lock raw_assets package.json manifest.json gulpfile.js
DATE = $(shell date +%I:%M\ %p)
CHECK = \033[32m✔\033[39m
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

#
# DEPLOY TO MASTER
#

deploy:
	@echo "\n${HR}"
	@echo "Deploying website..."
	@echo "${HR}\n"
	@JEKYLL_ENV=production jekyll build
	@echo "Generating files...                ${CHECK} Done"
	@yarn install
	@gulp compressjs
	@gulp minifycss
	@rm _site/css/main.css
	@mv _site/css/* _site/dist/css
	@find _site/js/ -type f -not -name '*modernizr.*.js' -print0 | xargs -0 rm --
	@echo "Generating statics...              ${CHECK} Done"
	@git checkout master
	@echo "Switch to master...                ${CHECK} Done"
	@rm -rf ${TO_DELETE_BEFORE} && cp -r _site/* .  && rm -rf _site && rm -rf ${TO_DELETE}
	@echo "Updating files...                  ${CHECK} Done"
	@git add --all . && git commit -m "Regenerate files (jekyll deployment)"
	@echo "Committing files...                ${CHECK} Done"
	@git checkout develop && git clean -f -d
	@echo "Switch back to develop...          ${CHECK} Done"
	@mkdir _site/ && jekyll build
	@echo "Re-generating files...             ${CHECK} Done"
	@echo "You can run back jekyll server now to follow changes"
	@echo "\n${HR}"
	@echo "Deployed successfully completed at ${DATE}."
	@echo "${HR}\n"
