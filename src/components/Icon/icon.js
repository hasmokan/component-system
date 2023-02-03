const req = require.context('../../assets/icon', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const icon = requireAll(req)
export default icon