/* global os remote fs mkdirp path */

let allAppPath;
switch (os.platform()) {
  case 'darwin': {
    allAppPath = path.join(remote.app.getPath('home'), 'Applications', 'WebCatalog Apps');
    break;
  }
  case 'linux': {
    allAppPath = path.join(remote.app.getPath('home'), '.local', 'share', 'applications');
    break;
  }
  case 'win32':
  default: {
    allAppPath = path.join(remote.app.getPath('home'), 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'WebCatalog Apps');
  }
}

// ensure the folder exists
if (!fs.existsSync(allAppPath)) {
  mkdirp.sync(allAppPath);
}

const getAllAppPath = () => allAppPath;

export default getAllAppPath;
