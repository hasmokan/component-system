const req = require.context('../../assets/icon', false, /\.svg$/)
let index = -1
const requireAll = requireContext => requireContext.keys().map(requireContext => {
    index++
    let link = req.keys().map(req);
    console.log('link'+link);
    const className = requireContext.slice(2, requireContext.length - 4);
    console.log('className'+className);
    return {
        class: {
            name: className,
            link: link[index]
        },
    }
})
const icon = requireAll(req)
console.log('icon'+icon);
export default icon
