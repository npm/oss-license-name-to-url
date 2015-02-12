module.exports = function(name) {
  var base = 'http://opensource.org/licenses/';

  var licenseMap = {
    'bsd': 'BSD-2-Clause',
    'mit': 'MIT',
    'x11': 'MIT',
    'mit/x11': 'MIT',
    'apache 2.0': 'Apache-2.0',
    'apache2': 'Apache-2.0',
    'apache 2': 'Apache-2.0',
    'apache-2': 'Apache-2.0',
    'apache': 'Apache-2.0',
    'gpl': 'GPL-3.0',
    'gplv3': 'GPL-3.0',
    'gplv2': 'GPL-2.0',
    'gpl3': 'GPL-3.0',
    'gpl2': 'GPL-2.0',
    'lgpl': 'LGPL-2.1',
    'lgplv2.1': 'LGPL-2.1',
    'lgplv2': 'LGPL-2.1'
  };

  return licenseMap[name.toLowerCase()] ?
         base + licenseMap[name.toLowerCase()] :
         base + name;
}
