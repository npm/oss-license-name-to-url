osiLicenses = Object.keys(require('osi-licenses')).map(function(license) {
  return license.toLowerCase();
});

var osiBaseUrl = 'http://opensource.org/licenses/';

var licenseNameMap = {
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
  'lgplv2': 'LGPL-2.1',
  'cc0': 'cc0-1.0',
  'wtfpl': 'wtfplv2'
};

// consider moving this to it's own module if it grows significantly large
var alternativeLicenseUrlMap = {
  'cc0-1.0': 'http://creativecommons.org/publicdomain/zero/1.0/',
  'wtfplv2': 'http://www.wtfpl.net/about/'
};

module.exports = function(name) {
  
  if (licenseNameMap[name.toLowerCase()]) {
    name = licenseNameMap[name.toLowerCase()];
  }

  if (osiLicenses.indexOf(name.toLowerCase()) != -1) {
   return osiBaseUrl + name;
  } else if (alternativeLicenseUrlMap[name.toLowerCase()]) {
    return alternativeLicenseUrlMap[name.toLowerCase()];
  } else {
    return null;
  }
   
};
