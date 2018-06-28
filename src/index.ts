import { run } from '@cycle/rxjs-run'
import { makeDOMDriver } from '@cycle/dom'
import { Component } from './interfaces'

import { App } from './app'

const main : Component = App

const drivers = {
  DOM: makeDOMDriver('#root')
}

// @ts-ignore
run(main, drivers)
