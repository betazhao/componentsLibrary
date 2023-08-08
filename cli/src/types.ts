const createSrcTypes = (componentInfo: ComponentInfo) => {
  const content = typesTemplate(componentInfo.lowCamelName, componentInfo.upCamelName)
  const fileFullName = `${componentInfo.fullPath}/src/types.ts`
  fs.writeFileSync(fileFullName, content)
}
