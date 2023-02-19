const req = require.context('./assets/icon', false, /\.svg$/)
let index = -1
const requireAll = requireContext => requireContext.keys().map(requireContext => {
    index++
    let link = req.keys().map(req);

    const className = requireContext.slice(2, requireContext.length - 4);
    return {
        class: {
            name: className,
            link: link[index]
        },
    }
})
const icon = requireAll(req)

export default icon
