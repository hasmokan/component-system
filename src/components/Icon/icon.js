const req = require.context('../../assets/icon', false, /\.svg$/)
let index = -1
const requireAll = requireContext => requireContext.keys().map(requireContext => {
    index++
    requireContext
    let link = req.keys().map(req);
    console.log(link[index]);
    const className = requireContext.slice(2, requireContext.length - 4);
    console.log(className);
    return {
        class: {
            name: className,
            link: link[index]
        },
    }
    // return { class: requireContext, link: link[index] } 
})
console.log(req.keys().map(req));
const icon = requireAll(req)
export default icon
