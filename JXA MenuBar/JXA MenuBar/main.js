//
//  main.js
//  JXA MenuBar
//
//  Created by uchcode.
//  Copyright © 2016 uchcode. All rights reserved.
//

App = Application.currentApplication()
App.includeStandardAdditions = true

function require(path) {
  if(!path) throw new Error("require: missing argument: path")
  function ItemPath(path) {
    let p = $(path).stringByStandardizingPath.js
    if ( !FileManager.fileExistsAtPath(p) ) {
      if ( FileManager.fileExistsAtPath(p+'.js') ) {
        return p+'.js'
      } else {
        return null
      }
    }
    let d = Ref()
    if ( FileManager.fileExistsAtPathIsDirectory(p, d) && d[0] ) {
      let i = `${p}/index.js`
      return FileManager.fileExistsAtPath(i) ? i : null
    }
    return p
  }
  function ModulePath(path) {
    let r = $.NSBundle.mainBundle.resourcePath.js
    if (r === '/usr/bin') r = FileManager.currentDirectoryPath.js
    let p
    p = ItemPath(path)
    if ( !p ) {
      p = ItemPath(`${r}/${path}`)
      if ( !p ) {
        let s = 'Script Libraries'
        p = ItemPath(`${r}/${s}/${path}`)
        if ( !p ) {
          p = ItemPath(`~/Library/${s}/${path}`)
          if ( !p ) {
            p = ItemPath(`/Library/${s}/${path}`)
            if ( !p ) {
              throw new Error(`require: file not found: '${path}'`)
            }
          }
        }
      }
    }
    return p
  }
  let FileManager = $.NSFileManager.defaultManager
  let m = ModulePath(path)
  let p = $(m)
  let u = $.NSUTF8StringEncoding
  let e = $()
  let c = $.NSString.stringWithContentsOfFileEncodingError(p, u, e).js
  if (e.js) throw new Error($.NSString.stringWithFormat('%@', e).js)
  let module  = {exports: {}}
  let exports = module.exports
  eval(c)
  return module.exports
}

eval( $.NSString.stringWithContentsOfFileEncodingError(`${$.NSBundle.mainBundle.resourcePath.js}/AppDelegate.js`, $.NSUTF8StringEncoding, $()).js )
