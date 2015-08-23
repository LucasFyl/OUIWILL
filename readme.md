# Oui Will 

Oui Will is a full-service, integrated creative agency.

We combine the european esthetic and the american yes we can. 
We create experiences in a digital world, helping people in their decisions for a brand, products and services.

## What's inside

* Kirby - a file-based CMS (http://getkirby.com/)
* Bourbon & Neat - for scss mixin and semantic grid framework (http://bourbon.io/ & http://neat.bourbon.io/)
* Grunt & Bower - for pckg management and dev environement
+
* MAMP to set up the local environement

## How to use:

* Open terminal

	- ``` cd /Applications/MAMP/htdocs ```
	- ``` git clone --recursive https://github.com/LucasFyl/OUIWILL.git ```
	- ``` cd OUIWILL ```
	- ``` npm install grunt-sass -save -save-dev ```
	- ``` npm install ```
	- ``` bower install ```
	- ``` grunt build ```

* Run MAMP.

* The site is now accesible localy.

Might need to update .htaccess if using MAMP instead of MAMP Pro. 

Pull master to update.


## Grunt tasks:

* ```grunt build-bower```: build all bower-dependencies.
* ```grunt build```: build the page (includes ```grunt build-bower```)
* ```grunt deploy```: copy all relevant files to ```/dist``` for deployment (includes ```grunt build```)
* ```grunt watch```: watches changes in:
  - ```assets/scss/*.scss```: build css and inject in page
  - ```assets/js/*.js```: build js and reload page
  - ```site/**/*.php```: reload page

```grunt watch``` will start a livereload-server, see ```site/snippets/footer.php```.
The script-tag which includes the server will be removed on ```grunt deploy```.
