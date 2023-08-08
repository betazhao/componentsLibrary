import { program } from 'commander'
import { createComponent } from './command/create-component'
export const mainEntry = () => {
  console.log('hello cli mainEntry', program)

  program.version(require('../package').version)
    .usage('<command> [arguments]')

  program.command('create')
    .description('create a new component')
    .alias('c')
    .action(createComponent)

  program.parse(process.argv)

  if (!program.args.length) {
    program.help()
  }
}

