'use client'

import World1 from 'app-esm-package1/entry'
import World2 from 'app-esm-package2/entry'
import World3 from 'invalid-esm-package/entry'

console.log('client', World1, World2, World3)

export default function Index() {
  return (
    <div>
      Hello {World1}+{World2}+{World3}
    </div>
  )
}
