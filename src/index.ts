const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const main = async () => {
  await sleep(1000)
  console.log('Hello')
  await sleep(1000)
  console.log('World!')
}

main()