/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Textarea/cn.md'
import en from 'doc/pages/components/Textarea/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Textarea/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Textarea/example-1-base.js'),
  },
  {
    title: locate('自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 style.maxHeight 即可', 'Autosize'),
    component: require('doc/pages/components/Textarea/example-2-autosize.js').default,
    rawText: require('!raw-loader!doc/pages/components/Textarea/example-2-autosize.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))