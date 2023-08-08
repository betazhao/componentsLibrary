import mitt, { Emitter } from 'mitt'
type Events = {
  foo: string
}
// const Mitt = mitt
export const emitter: Emitter<Events> = mitt<Events>()
export default emitter
