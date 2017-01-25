import gulp from 'gulp';
import path from 'path';
import rimraf from 'rimraf';

const $ = require('gulp-load-plugins')();

function compileServer() {
	return gulp.src('./src/server/**/*.js')
		.pipe($.changed('./build'))
		.pipe($.sourcemaps.init())
		.pipe($.babel())
		.pipe($.sourcemaps.write('.', { sourceRoot: path.join(__dirname, 'src', 'server') }))
		.pipe(gulp.dest('./build'))
		.on('error', () => {});
}

function watchServer() {
	return gulp.watch('./src/server/**/*.js', compileServer)
		.on('error', () => {});
}

gulp.task('server:clean', (cb) => {
	rimraf('./build', () => cb());
});

gulp.task("server:build",
	gulp.series('server:clean', compileServer));

gulp.task('server:watch',
	gulp.series('server:build', watchServer
		));

gulp.task('server:dev', gulp.series(
	'server:build', gulp.parallel(
		watchServer, function nodemon() {
			$.nodemon({
				script: './server.js',
				watch: 'build'
			});
		})
));
