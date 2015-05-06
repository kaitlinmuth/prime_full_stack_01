/**
 * Created by kaitlinmuth on 5/5/15.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular/angular-csp.css",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "boostrap/dist/css/bootstrap.min.css",
                    "bootrsap/dist/css/bootstrap.css.map",

                ],
                "dest": "server/public/vendor/"
            },
            glyphicons: {
                expand: true,
                cwd: "node_modules/bootstrap/fonts/",
                src: [
                    "glyphicons-halflings-regular.eot",
                    "glyphicons-halflings-regular.svg",
                    "glyphicons-halflings-regular.woff",
                    "glyphicons-halflings-regular.woff2"
                ],
                "dest": "server/public/vendor/bootstrap/dist/fonts/"
            },
            css: {
                expand: true,
                cwd: "client/",
                src: [
                    "style.css"
                ],
                "dest": "server/public/assets/css"

            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);

};
