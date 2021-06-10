export function mergeClassNames(...args) {
  return args.filter(Boolean).join(' ')
}