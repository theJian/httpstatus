import { of } from 'rxjs'
import { map, startWith } from 'rxjs/operators';
import {Sources, Sinks} from './interfaces'
import { div } from '@cycle/dom';

export function App(sources : Sources) : Sinks {
  const vdom$ = of(
    div([
      'Http Statues',
    ])
  )

  return {
    DOM: vdom$
  }
}
