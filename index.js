export default (...moduleIds) => {
    const require = window.require || window.top.require;

    return new Promise(function (resolve, reject) {
        const handle = require.on("error", reject);
        require(moduleIds, (...modules) => {
            handle.remove();
            resolve(modules);
        });
    });
};
