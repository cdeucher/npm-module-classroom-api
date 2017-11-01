#!/usr/bin/env node
'use strict';
var program = require( 'commander' );
var pkg = require( './package.json' );
var ryan    = require( './lib' );

program.version( pkg.version );
program.parse( process.argv );


program
  .command( 'cwd <arg>' )
    .description( 'open connection with server google' )
    .action(function connect( arg ) {
      console.log('arg', arg );
      switch(arg) {
       case 'open': ryan.open_connect(arg); break;
       default: console.log('command not found'); break;
      }
   });

program.parse( process.argv );
