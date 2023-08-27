const extractLastPathname = (path) => {
console.log(path + " extractLastPathname")
    return path.split('/').pop();
}

const hasPath = (path, paths) => {
console.log(path + " hasPath")
console.log(paths + " hasPath")
    return paths.includes(path);
}

const notHasPath = (path, paths) => {
console.log(path + " notHasPath")
console.log(paths + " notHasPath")
    return !hasPath(path, paths);
}

module.exports = {extractLastPathname, hasPath, notHasPath};