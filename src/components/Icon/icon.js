const req = require.context('../../assets/icon', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const icon = requireAll(req)
console.log(icon)
export default icon